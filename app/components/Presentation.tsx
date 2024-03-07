import Image from "next/image";

const Presentation = () => {
  return (
    <div
      id="about"
      className="flex flex-row items-center px-8 py-40 justify-center gap-20"
    >
      <h1 className="text-5xl text-matte-blue font-bold">
        Hi 👋,
        <br />
        My name is
        <br />
        <span className="gradient-text">Marcus</span>
        <br />I build things for web
      </h1>
      <Image
        className="rounded-full"
        src="/profile.jpg"
        alt="profile image"
        width={200}
        height={200}
      />
    </div>
  );
};

export default Presentation;
