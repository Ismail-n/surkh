import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const WhatsAppPhoneButton = () => {
  const phoneNumber = "966554848908";
  return (
    <div className="floating_buttons">
      {/* WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp_float"
        animate={{
          y: [0, -10, 0, 5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        <Image
          src={"/images/icons/whatsAppIcon.svg"}
          width={60}
          height={60}
          alt="whatsapp"
        />
      </motion.a>

      {/* Call Button */}
      <motion.a
        href={`tel:+${phoneNumber}`}
        className="call_float"
        animate={{ y: [0, -5, 0] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
          delay: 0.5, 
        }}
      >
        <Image
          src="/images/icons/phoneIcon.svg"
          width={48}
          height={48}
          alt="Call"
        />
      </motion.a>
    </div>
  );
};

export default WhatsAppPhoneButton;
