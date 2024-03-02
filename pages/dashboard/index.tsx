import Card from "@/components/layout/card";

const Dashboard = () => {
  const content = <p>insert quote here</p>;
  return (
    <div>
      <h2 className="pb-4">Welcome!</h2>
      <div>
        <Card title="Inspo quote of the day..." content={content} />
      </div>
    </div>
  );
};

export default Dashboard;
