import whatsappIcon from "@/assets/whatsapp.png";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/8801634391240"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-[60px] h-[60px] rounded-full bg-primary shadow-lg transition-transform duration-300 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <img
        src={whatsappIcon}
        alt="WhatsApp"
        className="w-8 h-8"
        style={{ filter: 'brightness(0) invert(1)' }}
      />
    </a>
  );
};

export default WhatsAppButton;
