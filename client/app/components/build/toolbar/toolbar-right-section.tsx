import CopyButton from "../buttons/copy-button"
import SaveButton from "../buttons/save-button"
import ProfileButton from "../buttons/profile-button"
import ConnectionSwitch from "../buttons/connection-switch"

const RightSection = () => {
  return (
    <div className="flex justify-evenly items-center p-2 gap-3">
      <ConnectionSwitch/>
      <CopyButton/>
      <SaveButton/>
      <ProfileButton/>
    </div>
  )
}

export default RightSection
