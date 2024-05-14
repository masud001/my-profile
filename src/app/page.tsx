import Image from "next/image";

export default function Home() {
  return (
	<>
      <div className="flex flex-col items-center justify-center">
			<div className="w-[200px] h-[200px] rounded-full">
				<Image
				src="/images/masud.jpg"
				alt="Masud's profile"
				width={200}
				height={200}
				className="w-[200px] h-[200px] rounded-full object-cover"
				/>
			</div>
			<h1 className="text-4xl font-bold mt-4">Masud Karim</h1>
			<p className="text-lg text-gray-500">Frontend Developer</p>
		</div>
	</>
  );
}
