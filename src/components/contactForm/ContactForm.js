import React from "react";
import { useForm } from "react-hook-form";

const wait = function (duration = 1000) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, duration);
  });
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    isSubmitted,
    isSubmitSuccessful,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await wait(2000);
  };

  // console.log(formState);
  console.log(errors);

  return (
    <div className="contactForm__page">
      <form
        name="contact"
        className="contact__form"
        onSubmit={handleSubmit(onSubmit)}
      >
        {isSubmitSuccessful && (
          <div className="alert alert-success">Merci pour votre message</div>
        )}
        <h1>Contactez-nous</h1>
        <div className="underline"></div>
        <div className="contact__form-content">
          <div className="content_left">
            <div className="box">
              <label htmlFor="name">Nom et Prénom</label>
              <input
                className="name"
                type="text"
                name="name"
                {...register("name", {
                  required: "Renseignez votre nom et votre prénom",
                  maxLength: 20,
                })}
              />
              {errors.name && <span>{errors.name.message}</span>}
              <i className="fa fa-user"></i>
            </div>
            <div className="box">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                {...register("email", { required: "Email non valide" })}
              />
              {errors.email && <span>{errors.email.message}</span>}
              <i className="fa fa-envelope"></i>
            </div>
            <div className="box">
              <label htmlFor="phone">Téléphone</label>
              <input
                type="text"
                name="phone"
                {...register("phone", { required: "Indiquez votre téléphone" })}
              />
              {errors.phone && <span>{errors.phone.message}</span>}
              <i className="fa fa-phone-square"></i>
            </div>
          </div>

          <div className="content_right">
            <div className="box">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                placeholder="Votre texte ici..."
                {...register("message", { required: "Indiquez votre message" })}
              ></textarea>
              {errors.message && <span>{errors.message.message}</span>}
            </div>
          </div>
        </div>

        <div className="btn__submit" align="center">
          <button type="submit">Envoyer</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
