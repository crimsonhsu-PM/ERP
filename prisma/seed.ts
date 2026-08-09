import { PrismaClient } from "@prisma/client";
import { hashPassword } from "../src/lib/password";

const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.user.upsert({
    where: { email: "admin@example.com" },
    update: {},
    create: {
      email: "admin@example.com",
      name: "系統管理員",
      passwordHash: await hashPassword("password123")
    }
  });

  const service = await prisma.item.upsert({
    where: { id: "seed-service-consulting" },
    update: {},
    create: {
      id: "seed-service-consulting",
      type: "DIVINATION_SERVICE",
      name: "一對一諮詢服務",
      price: 1800,
      cost: 300,
      requiresInventory: false,
      notes: "服務銷售範例"
    }
  });

  const product = await prisma.item.upsert({
    where: { id: "seed-product-coursebook" },
    update: {},
    create: {
      id: "seed-product-coursebook",
      type: "PHYSICAL_PRODUCT",
      name: "課程教材包",
      price: 600,
      cost: 220,
      requiresInventory: true,
      notes: "商品銷售範例"
    }
  });

  await prisma.inventoryMovement.create({
    data: {
      itemId: product.id,
      type: "PURCHASE",
      quantity: 20,
      reason: "開帳庫存"
    }
  });

  const employee = await prisma.employee.upsert({
    where: { id: "seed-employee-amy" },
    update: {},
    create: {
      id: "seed-employee-amy",
      name: "Amy",
      phone: "0912-345-678",
      role: "現場服務"
    }
  });

  await prisma.shift.create({
    data: {
      employeeId: employee.id,
      type: "ONSITE",
      startsAt: new Date(),
      endsAt: new Date(Date.now() + 4 * 60 * 60 * 1000),
      location: "門市"
    }
  });

  const customer = await prisma.customer.upsert({
    where: { id: "seed-customer-lin" },
    update: {},
    create: {
      id: "seed-customer-lin",
      name: "林小姐",
      phone: "0988-000-111",
      email: "lin@example.com",
      serviceLink: "https://example.com/customer/lin"
    }
  });

  const event = await prisma.event.upsert({
    where: { id: "seed-event-course" },
    update: {},
    create: {
      id: "seed-event-course",
      title: "線上課程體驗營",
      term: "第一期",
      startsAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      preparationNote: "確認講義、匯款資訊與課前通知。"
    }
  });

  await prisma.eventRegistration.create({
    data: {
      eventId: event.id,
      customerId: customer.id,
      attendeeName: customer.name,
      phone: customer.phone,
      status: "REGISTERED",
      paidAmount: 0
    }
  });

  await prisma.coursePayment.create({
    data: {
      customerId: customer.id,
      courseName: "線上課程體驗營",
      amount: 1200,
      paymentMethod: "TRANSFER",
      status: "待確認"
    }
  });

  await prisma.sop.create({
    data: {
      title: "每日結帳流程",
      category: "營收",
      status: "ACTIVE",
      description: "確認營收流水、現金、匯款與零用金支出。",
      steps: {
        create: [
          { sortOrder: 1, title: "核對當日銷售單", owner: "櫃台", status: "TODO" },
          { sortOrder: 2, title: "確認現金與匯款", owner: "會計", status: "TODO" }
        ]
      }
    }
  });

  await prisma.sale.create({
    data: {
      customerName: customer.name,
      paymentMethod: "CASH",
      subtotal: 2400,
      discount: 0,
      total: 2400,
      lines: {
        create: [
          { itemId: service.id, quantity: 1, unitPrice: 1800, lineTotal: 1800 },
          { itemId: product.id, quantity: 1, unitPrice: 600, lineTotal: 600 }
        ]
      }
    }
  });

  await prisma.inventoryMovement.create({
    data: {
      itemId: product.id,
      type: "SALE",
      quantity: -1,
      reason: "種子銷售扣庫存"
    }
  });

  console.log(`Seeded ERP demo data for ${admin.email}`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
