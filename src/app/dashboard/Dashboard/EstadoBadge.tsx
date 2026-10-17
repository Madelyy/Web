export default function EstadoBadge({ estado }: { estado: string }) {
    const pendiente = estado === "Pendiente";
    const enProceso = estado === "En proceso";

    const colores = pendiente
        ? {
              fondo: "#FEF1DC",
              texto: "#9A6212",
              punto: "#F2A63B",
          }
        : enProceso
        ? {
              fondo: "#E8F0FE",
              texto: "#315B96",
              punto: "#5B8DEF",
          }
        : {
              fondo: "#E3F6F2",
              texto: "#0F7F6E",
              punto: "#1FB5A0",
          };

    return (
        <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
            style={{
                background: colores.fondo,
                color: colores.texto,
            }}
        >
            <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: colores.punto }}
            />
            {estado}
        </span>
    );
}