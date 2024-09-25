import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false); // Nuevo estado para el modal
  const [modalMessage, setModalMessage] = useState(""); // Mensaje del modal

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que los campos no estén vacíos antes de enviar
    if (!form.name || !form.email || !form.message) {
      setModalMessage("Por favor complete todos los campos antes de enviar.");
      setShowModal(true);
      return;
    }

    setLoading(true);

    emailjs
      .send(
        'service_gi247f6', // ID del servicio en EmailJS
        'template_mo7dm1i', // ID de la plantilla en EmailJS
        {
          from_name: form.name, // Nombre del remitente
          from_email: form.email, // Correo del remitente
          to_name: "Rama", // Nombre del destinatario
          to_email: "ramagonzalez397@gmail.com", // Correo del destinatario
          message: form.message, // Mensaje del remitente
        },
        '0zCA4MDe5eLyKCUDU' // Llave pública
      )
      .then(
        () => {
          setLoading(false);
          setModalMessage("Gracias por enviar. Nos comunicaremos pronto.");
          setShowModal(true);

          // Resetear el formulario después de enviar
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setModalMessage("Ahh, sucedió algo inesperado. Intente otra vez por favor.");
          setShowModal(true);
        }
      );
  };

  return (
    <div>
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <p className="text-center text-[#915EFF] font-bold">{modalMessage}</p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 bg-[#915EFF] hover:bg-[#7a47e1] py-2 px-4 rounded-lg text-white font-semibold"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      <motion.div
        variants={slideIn("center", "tween", 0.05, 0.5)}
        className="bg-gradient-to-r from-[#1d1836] to-[#3b3054] p-8 rounded-2xl shadow-lg"
      >
        <h2 className={`${styles.sectionHeadText} text-center text-white`}>
          <span className="text-[#F6FA70]">Contacto</span>
        </h2>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Nombre</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Tu nombre"
              className="bg-gray-800 py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Correo Electrónico</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Tu correo"
              className="bg-gray-800 py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Mensaje</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Escribe tu mensaje aquí..."
              className="bg-gray-800 py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-[#915EFF] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md hover:bg-[#7a47e1] transition-all duration-300"
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
