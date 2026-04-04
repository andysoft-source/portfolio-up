import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { PROJECTS } from "../../../constants/projects";
import { cardContainerVariants } from "./animations";
import { useTheme } from "../../../contexts/ThemeContext";
import { useUI } from "../../../hooks/useUI";
import SectionHeading from "../../ui/common/SectionHeading";

export default function Projects() {
    const { currentTheme } = useTheme();
    const { setIsProjectModalOpen } = useUI();
    const [activeProject, setActiveProject] = useState(null);

    return (
        <section className="max-w-7xl mx-auto py-12 px-4 lg:px-8">
            <div className="text-center mb-16">
                <SectionHeading level="section">
                    Featured Projects
                </SectionHeading>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    className={`text-lg max-w-2xl mx-auto ${
                        currentTheme === 'minimal' ? 'text-gray-600' : 'text-neutral-400'
                    }`}
                >
                    A showcase of my technical projects, demonstrating full-stack development, 
                    problem-solving skills, and attention to user experience.
                </motion.p>
            </div>
            <motion.div
                variants={cardContainerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10 projects-grid"
            >
                {PROJECTS.length > 0 ? (
                    PROJECTS.map((project) => (
                        <ProjectCard
                            key={project.title}
                            project={project}
                            onReadMore={() => {
                                setActiveProject(project);
                                setIsProjectModalOpen(true);
                            }}
                        />
                    ))
                ) : (
                    <div className={`col-span-full text-center ${
                        currentTheme === 'minimal' ? 'text-gray-900' : 'text-white'
                    }`}>
                        <p>No projects found. Total projects: {PROJECTS.length}</p>
                    </div>
                )}
            </motion.div>
            <ProjectModal
                project={activeProject}
                onClose={() => {
                    setActiveProject(null);
                    setIsProjectModalOpen(false);
                }}
            />
        </section>
    );
}