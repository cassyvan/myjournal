interface props {
  cardInfo: string | JSX.Element[];
  journalGuide: string;
}

const GuideItem = ({ cardInfo, journalGuide }: props) => {
  return <div>{cardInfo}</div>;
};

export default GuideItem;
