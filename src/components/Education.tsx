import { motion } from 'motion/react';
import { GraduationCap, Award, BookOpen, Computer } from 'lucide-react';

const educationData = [
  {
    year: '2025 - Present',
    degree: 'Packaged App Development',
    institution: 'Accenture',
    description: 'Supporting the design, development, and implementation of packaged applications to meet client business needs. Collaborating with cross-functional teams to deliver reliable, efficient, and scalable solutions while ensuring quality and adherence to best practices.',
    icon: <Computer className="h-5 w-5" />,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    year: '2021 - 2025',
    degree: 'B.Tech in Information Technology',
    institution: 'Narula Institute of Technology',
    description: 'Specialized in Software Engineering and Information Technology. Graduated B.Tech with a GPA of 8.63/10.0.',
    icon: <GraduationCap className="h-5 w-5" />,
    color: 'from-green-500 to-emerald-500'
  },
  {
    year: '2020 - 2021',
    degree: 'Senior Secondary Education',
    institution: 'Sri Chaitanya Techno School',
    description: 'Completed Higher Secondary Education with a focus on Science, Mathematics and Computer. Graduated with 75% in Class 12th.',
    icon: <Award className="h-5 w-5" />,
    color: 'from-orange-500 to-red-500'
  },
  {
    year: '2018 - 2019',
    degree: 'Secondary Education',
    institution: 'Douglas Memorial Higher Secondary School',
    description: 'Completed Secondary Education with a focus on Science, Mathematics, Arts and Computer. Graduated with 79% in Class 10th.',
    icon: <BookOpen className="h-5 w-5" />,
    color: 'from-purple-500 to-pink-500'
  }
];

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl mb-4">
            Education & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development in technology and design
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true }}
          />

          <div className="space-y-12">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, scale: 0.8 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.3,
                  ease: "easeOut"
                }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <motion.div
                    className="bg-card border border-border rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                      <motion.div
                        className={`p-2 rounded-lg bg-gradient-to-r ${item.color} text-white`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {item.icon}
                      </motion.div>
                      <span className="text-sm text-muted-foreground font-medium">{item.year}</span>
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-2">{item.degree}</h3>
                    <h4 className="text-base text-blue-600 mb-3">{item.institution}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* Timeline Node */}
                <motion.div
                  className="relative z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.3 + 0.4,
                    type: "spring",
                    stiffness: 300
                  }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className={`w-4 h-4 rounded-full bg-gradient-to-r ${item.color} border-4 border-background shadow-lg`}
                    whileHover={{ scale: 1.5 }}
                    transition={{ duration: 0.2 }}
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(59, 130, 246, 0.4)",
                        "0 0 0 10px rgba(59, 130, 246, 0)",
                      ],
                    }}
                    style={{
                      animationDelay: `${index * 0.3 + 0.8}s`,
                      animationDuration: "2s",
                      animationIterationCount: "infinite",
                    }}
                  />
                </motion.div>

                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating Animation Elements */}
        <motion.div
          className="absolute top-10 right-10 w-20 h-20 bg-blue-500/10 rounded-full"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-16 h-16 bg-purple-500/10 rounded-full"
          animate={{
            y: [0, 15, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
}