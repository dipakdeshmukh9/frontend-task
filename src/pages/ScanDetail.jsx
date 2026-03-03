import { useParams } from "react-router-dom";

function ScanDetail() {
  const { id } = useParams();

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">
        Scan Detail - {id}
      </h1>

      <div className="bg-white dark:bg-[#1A1A1A] p-6 rounded-xl shadow">
        Scan detail content goes here
      </div>
    </div>
  );
}

export default ScanDetail;