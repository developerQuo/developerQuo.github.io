export default function setupClock(element: HTMLElement) {
    const setTime = () => {
        const today = new Date();
        element.innerText = today.toLocaleTimeString();
    };

    setTime();
    setInterval(setTime, 1000);
}