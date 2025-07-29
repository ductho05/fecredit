export default function manifest() {
  return {
    name: "FeCredit",
    short_name: "FeCredit",
    description:
      "Nền tảng hỗ trợ vay vốn nhanh. Cho vay tiền mặt từ 10 đến 100 triệu ,không thẩm định người thân,không cần xác minh thu nhập. Chỉ cần CCCD",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
