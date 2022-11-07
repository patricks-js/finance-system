import { useLayoutEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation } from "react-router-dom";

import { UserAuthType } from "../../@types/user";
import { useAuth } from "../../hooks/AuthContext";

export const Login = () => {
  const { register, handleSubmit } = useForm<UserAuthType>();
  const { state } = useLocation();
  const [time, setTime] = useState(0);
  const { login } = useAuth();

  const submit = handleSubmit(async dataForm => {
    try {
      login(dataForm);
    } catch (err) {
      console.log(err);
    }
  });

  let message = "";

  if (state) {
    message = state.message;
  }

  useLayoutEffect(() => {
    setTime(3);
    setTimeout(() => {
      setTime(time - 1);
    }, 3000);
  }, []);

  return (
    <>
      <div className="flex min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div
          className={`${
            state && time > 0 ? "translate-y-0" : "-translate-y-20"
          } px-8 py-3 transition-all duration-200 bg-green-500 absolute top-5 right-5 border-b-4 border-indigo-600`}>
          <p className="text-white">{message}</p>
        </div>

        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Entrar em sua conta
            </h2>
          </div>
          <form
            onSubmit={submit}
            className="mt-8 grid gap-y-6 p-5 sm:p-7 md:p-10 shadow-md rounded-md bg-white">
            <div className="grid gap-y-5 rounded-md shadow-sm">
              <div className="grid gap-2">
                <label
                  htmlFor="email-address"
                  className="font-medium text-base md:text-lg">
                  Endereço de email
                </label>
                <input
                  id="email-address"
                  {...register("email")}
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="mail@mail.com"
                />
              </div>
              <div className="grid gap-2">
                <label
                  htmlFor="password"
                  className="font-medium text-base md:text-lg">
                  Senha
                </label>
                <input
                  id="password"
                  type="password"
                  {...register("password")}
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="********"
                  minLength={4}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group transition-colors duration-300 relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
                Entrar
              </button>
              <p className="text-sm md:text-base mt-3 text-center">
                Não tem uma conta?{" "}
                <Link
                  to="/create-account"
                  className="text-indigo-700 font-medium transition-all hover:underline">
                  Crie uma agora
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
