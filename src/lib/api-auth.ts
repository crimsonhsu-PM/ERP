export async function requireApiUser() {
  return {
    user: { id: "portfolio-demo", email: "demo@portfolio.local", name: "作品展示" },
    response: null
  };
}
