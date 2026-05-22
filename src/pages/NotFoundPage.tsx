import React from 'react';
import { Link } from 'react-router-dom';
import errorBanner from '../assets/banner/404-02.png';

const NotFoundPage = () => {
  return (
    <section className="bg-[#f1f5fa] px-4 pb-24 pt-16 sm:pt-20">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          <img
            src={errorBanner}
            alt="Error 404"
            className="mx-auto mb-8 w-full max-w-2xl"
          />

          <h1 className="mb-4 text-4xl font-bold text-[#0F172A] sm:text-5xl">
            Oops!
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-base leading-7 text-[#1f2937] sm:text-lg">
            La página que buscas no se encuentra disponible.
            <br />
            Revisa el URL o vuelve a la página de inicio.
          </p>

          <Link
            to="/"
            className="inline-flex rounded-full bg-[#7FB0EA] px-7 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#5f98dc]"
          >
            Regresar al Inicio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
