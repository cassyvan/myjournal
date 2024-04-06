import { getGuides } from "@/utils/guides";

const GuidePage = () => {
  const guides = getGuides;
  return <div>{guides.map((guide) => guide.cardInfo)}</div>;
};

export default GuidePage;
