import Image from "next/image";

const StebByStepMagic = () => {
  return (
    <div className="flex justify-between items-center pt-4 pb-6 sm:pb-8 px-20 sm:px-32 border-none">
      <Image
        src={"/images/SmNewLogo.svg"}
        height={115}
        width={53}
        className="object-cover"
        alt="Superminds Logo"
        priority={true}
      />
    </div>
  );
};

export default StebByStepMagic;
