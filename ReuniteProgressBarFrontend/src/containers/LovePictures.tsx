import { Icon } from "@iconify/react/dist/iconify.js";

export const LovePictures = () => {
  return (
    <div className="love-pictures-container">
      <img
        className="picture-of-us"
        src="https://cdn.discordapp.com/attachments/935235607431626755/1141554159317958776/IMG_4819.jpg"
      />
      <Icon className="heart-icon" icon="teenyicons:heart-solid" color="red" />
    </div>
  );
};
