// Espera a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function() {
    // Obtén el elemento select que representa el menú desplegable de filtrado por equipo
    const teamFilter = document.getElementById("teamFilter");
    // Obtén todas las filas de estadísticas de jugadores
    const rows = document.querySelectorAll(".player-stats .team-stats");

    // Agrega un evento de escucha para detectar cambios en la selección del usuario
    teamFilter.addEventListener("change", function() {
        // Obtiene el valor seleccionado en el menú desplegable (nombre del equipo)
        const selectedTeam = teamFilter.value;

        // Itera sobre cada fila de estadísticas de jugadores
        rows.forEach(row => {
            // Obtiene el nombre del equipo de la fila actual
            const teamName = row.querySelector("h3").textContent.trim();
            // Verifica si el equipo seleccionado es "Todos los equipos" o si coincide con el nombre del equipo en la fila actual
            if (selectedTeam === "all" || teamName === selectedTeam) {
                // Muestra la fila si coincide con el equipo seleccionado
                row.style.display = "block";
            } else {
                // Oculta la fila si no coincide con el equipo seleccionado
                row.style.display = "none";
            }
        });
    });
});
