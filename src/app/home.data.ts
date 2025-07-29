import ProcerudeType from "@/types/ProcerudeType";
import ProductType from "@/types/ProductType";

class HomeData {
  static readonly productInfo: ProductType[] = [
    {
      id: 1,
      description:
        "Gói vay từ 10 triệu – 100 triệu đồng. Chỉ cần CCCD, giải nhân trong ngày",
      image: "/loan-amount.svg",
      alt: "Gói vay",
    },
    {
      id: 2,
      description: "Thời gian vay từ 6 tháng – 60 tháng",
      image: "/loan-term.svg",
      alt: "Thời gian vay",
    },
    {
      id: 3,
      description: "Lãi suất cạnh tranh hấp dẫn (chỉ từ 1.75%/tháng)",
      image: "/interest-rate.svg",
      alt: "Lãi suất",
    },
    {
      id: 4,
      description: "Thủ tục đơn giản, không thế chấp",
      image: "/no-collateral.svg",
      alt: "Thủ tục",
    },
    {
      id: 5,
      description: "Tỷ lệ duyệt vay cao. Giải ngân nhanh chóng",
      image: "/fast-approval.svg",
      alt: "Tỷ lệ duyệt",
    },
    {
      id: 6,
      description: "Lãi suất tối đa 35%/năm dựa trên dư nợ gốc",
      image: "/max-interest.svg",
      alt: "Lãi tối đa",
    },
  ];

  static readonly procerudeInfo: ProcerudeType[] = [
    {
      stepName: "Gửi yêu cầu tư vấn",
      description: "Liên hệ qua website hoặc hotline để được tư vấn miễn phí.",
    },
    {
      stepName: "Nhận tư vấn & hoàn tất hồ sơ",
      description:
        "Đội ngũ tư vấn hỗ trợ hoàn thiện hồ sơ nhanh chóng, đơn giản.",
    },
    {
      stepName: "Thẩm định & giải ngân",
      description: "Hồ sơ được thẩm định và giải ngân nhanh chóng trong ngày.",
    },
  ];
}

export default HomeData;
