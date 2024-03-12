import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  createNationality,
  deleteNationality,
  updateNationality,
  getNationality,
} from "../api/Nationalities.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

export function NationalityForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const params = useParams();

  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateNationality(params.id, data);
      toast.success("País actualizado", {
        duration: 2000,
        position: "bottom-right",
        style: {
          background: "#4caf50",
          color: "#ffffff",
        },
      });
    } else {
      await createNationality(data);
      toast.success("País creado", {
        duration: 2000,
        position: "bottom-right",
        style: {
          background: "#4caf50",
          color: "#ffffff",
        },
      });
    }
    navigate("/nationalities");
  });

  useEffect(() => {
    async function fetchNationality() {
      if (params.id) {
        const res = await getNationality(params.id);
        setValue("name", res.data.name);
      }
    }
    fetchNationality();
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Digite el nombre del país"
          {...register("name", { required: true })}
        />
        {errors.name && <span>Este campo es requerido</span>}
        <button type="submit">{params.id ? "Actualizar" : "Crear"}</button>
      </form>

      {params.id && (
        <button
          onClick={async () => {
            const accept = window.confirm("¿Está seguro?");

            if (accept) {
              await deleteNationality(params.id);
              navigate("/nationalities");
              toast.success("País eliminado", {
                duration: 2000,
                position: "bottom-right",
                style: {
                  background: "#4caf50",
                  color: "#ffffff",
                },
              });
            }
          }}
        >
          Eliminar
        </button>
      )}
    </div>
  );
}
