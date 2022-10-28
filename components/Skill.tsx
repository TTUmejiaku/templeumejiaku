import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
  brandLogo: React.ComponentType<{ className: string }>;
  brandName: string;
};

function Skill({ directionLeft, brandLogo: BrandLogo, brandName }: Props) {
  return (
    <div className="group relative flex cursor-pointer border border-gray-500 rounded-xl overflow-hidden">
      <motion.div
        initial={{ x: directionLeft ? -50 : 50, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className=" w-[74px] h-[74px] md:w-28 md:h-28 filter group-hover:grayscale transition duration-300 ease-in-out p-2"
      >
        <BrandLogo className="text-black bg-gradient-to-r from-priYellow to-slate w-full h-full rounded-xl" />
      </motion.div>
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-[74px] h-[74px] md:w-28 md:h-28 rounded-xl z-0">
        {/* <p className="text-3xl font-bold text-black opacity-100">100%</p> */}
        <div className="flex items-center justify-center h-full">
          <p className="text-xSmall font-bold text-black opacity-100">
            {brandName}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
