import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

//0zCA4MDe5eLyKCUDU
//template_mo7dm1i
//service_gi247f6

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_gi247f6',
        'template_mo7dm1i',
        {
          from_name: form.name,
          to_name: "Rama",
          from_email: form.email,
          to_email: "ramagonzalez397@gmail.com",
          message: form.message,
        },
        '0zCA4MDe5eLyKCUDU'
      )
      .then(
        () => {
          setLoading(false);
          alert("Gracias por enviar. Nos comunicaremos pronto");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, sucedio algo inesperado. Intente otra vz por favor");
        }
      );
  };

  return (
    <div
    >
      <motion.div
        variants={slideIn("center", "tween", 0.0005, 0.50)}
        className='text-[#915EFF] flex-[0.50] bg-black-100 p-8 rounded-2xl'
      >
        <h3 className={'text-[#915EFF]'+styles.sectionHeadText}>Contacto</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-2 flex flex-col gap-2'
        >
          <label className='flex flex-col'>
            <span className='text-[#915EFF] font-medium mb-4'></span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Nombre"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-[#915EFF] rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-[#915EFF] font-medium mb-4'></span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Mail"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-[#915EFF] rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-[#915EFF] font-medium mb-4'></span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Su nombre y su mail quedan en anonimato. Por favor envie su mensaje con los datos correspondientes. Tanto Mail como asunto con el fin de entablar una conversacion.'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-[#915EFF] rounded-lg outline-none border-none font-medium'
            />
          </label>
          <span className='text-[#915EFF] font-medium mb-4'></span>
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-[#915EFF] font-bold shadow-md shadow-primary'
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </motion.div>

    </div>
  );
};

export default SectionWrapper(Contact, "contact");