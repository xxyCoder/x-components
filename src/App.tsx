import { FC, useEffect, useState } from "react";
import Button from "@/components/button";

const App: FC = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])

  return (
    <div className="border-box p-10 h-full">
      <Button insertSpace size="large" loading={loading} icon={<>icon</>} iconPosition="end">
        hello world
      </Button>
    </div>
  );
};

export default App;
