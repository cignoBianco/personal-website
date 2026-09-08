export function formatDuration(
    seconds: number | null,
): string {
    if (
        seconds === null ||
        !Number.isFinite(seconds) ||
        seconds < 0
    ) {
        return "";
    }

    const totalSeconds =
        Math.floor(seconds);

    const hours =
        Math.floor(
            totalSeconds / 3600,
        );

    const minutes =
        Math.floor(
            (totalSeconds % 3600) / 60,
        );

    const remainingSeconds =
        totalSeconds % 60;

    if (hours > 0) {
        return [
            hours,
            minutes
                .toString()
                .padStart(2, "0"),
            remainingSeconds
                .toString()
                .padStart(2, "0"),
        ].join(":");
    }

    return [
        minutes
            .toString()
            .padStart(2, "0"),
        remainingSeconds
            .toString()
            .padStart(2, "0"),
    ].join(":");
}