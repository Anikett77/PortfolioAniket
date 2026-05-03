import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import BlurImage from "@/public/image/placeholder/blur.jpg";

export default function ProjectCard({ project, index, activeCategory }) {
	return (
		<>
			{project.category.includes(parseInt(activeCategory)) && (
				<Link href={"projects/" + project.slug} key={index}>
			<motion.div
				onClick={() => setActive(!active)} // toggle on tap
				onTouchStart={() => setActive(true)} // touch pe activate
				className="z-10 relative flex justify-center items-start flex-col mb-5 md:px-10 w-full h-auto bg-gray-400 py-20 px-5 md:py-2 aspect-video"
				initial={{ opacity: 0, x: -200 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ type: "spring" }}
			>
				<Image
					src={project.thumbnail}
					alt="Aniket"
					fill
					className={`bg-slate-950 transition-all duration-500 ${
						active ? "opacity-100" : "opacity-10"
					}`}
				/>

				<div className="absolute top-0 left-0 bg-gray-600 px-4 py-2">
					<h4 className="text-white">{project.year}</h4>
				</div>

				<div
					className={`transition-all duration-500 text-center z-10 ${
						active ? "opacity-0" : "opacity-100"
					}`}
				>
					<h1 className="text-3xl font-bold mb-3">
						{project.title}
					</h1>

					<p>
						{project.desc[0].length > 125
							? `${project.desc[0].slice(0, 125)}...`
							: project.desc[0]}
					</p>

					<div className="flex justify-center flex-wrap mt-5">
						{project.tech.map((t, index) => (
							<span
								key={index}
								className="m-1 px-4 py-2 bg-gray-600 text-white"
							>
								{t}
							</span>
						))}
					</div>
				</div>
			</motion.div>
		</Link>
			)}
		</>
	);
}

ProjectCard.propTypes = {
	project: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired,
	activeCategory: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
		.isRequired,
};
