import Swal from "sweetalert2";

export function success(texto) {
  Swal.fire({
    position: "center",
    icon: "success",
    title: texto,
    showConfirmButton: false,
    timer: 1500,
  });
}

export function error(texto) {
  Swal.fire({
    position: "center",
    icon: "error",
    title: texto,
    showConfirmButton: false,
    timer: 1500,
  });
}

export function confirm() {
  return Swal.fire({
    title: "¿Estás seguro?",
    text: "Esta acción no se puede deshacer.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Sí, eliminar",
  });
}
