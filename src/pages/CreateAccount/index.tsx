import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { api } from "../../config/api";

type FieldType = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const CreateAccount = () => {
  const { register, handleSubmit } = useForm<FieldType>();
  const navigateTo = useNavigate();

  const submit = handleSubmit(async data => {
    try {
      await api.post("/users/register", data);
      navigateTo("/login");
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <>
      <div className="flex min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-4xl font-bold tracking-tight text-gray-900">
              Criar sua conta
            </h2>
          </div>
          <form
            onSubmit={submit}
            className="mt-8 grid gap-y-6 px-10 py-10 shadow-md rounded-md bg-white">
            <div className="grid gap-y-5 rounded-md shadow-sm">
              <div className="grid gap-2">
                <label
                  htmlFor="full-name"
                  className="">
                  Nome
                </label>
                <input
                  id="full-name"
                  {...register("name")}
                  type="text"
                  required
                  className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="John Doe"
                />
              </div>
              <div className="grid gap-2">
                <label
                  htmlFor="email-address"
                  className="">
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
                  className="">
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
              <div className="grid gap-2">
                <label
                  htmlFor="password"
                  className="">
                  Confirmar senha
                </label>
                <input
                  id="confirm-password"
                  type="password"
                  {...register("confirmPassword")}
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
              <p className="text-sm mt-3 text-center">
                Já tem uma conta?{" "}
                <Link
                  to="/login"
                  className="text-indigo-700 font-medium transition-all hover:underline">
                  Clique aqui para acessar
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
