import NewFileButton from "../buttons/new-file-button";
import ShowConnectionButton from "../buttons/show-connections-button";
const LeftSection = () => {
  return (
    <div className="flex justify-evenly items-center p-2 gap-3">
      <ShowConnectionButton />
      <NewFileButton />
    </div>
  );
};

export default LeftSection;
