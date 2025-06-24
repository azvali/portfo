import React, { useEffect, useState, useMemo } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadFull } from 'tsparticles';

const MatrixBackground = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options = useMemo(() => ({
        background: {
            color: '#000',
        },
        fullScreen: {
            enable: true,
            zIndex: -1,
        },
        particles: {
            number: {
                value: 200,
                density: {
                    enable: true,
                    area: 800,
                },
            },
            color: {
                value: ['#0f0', '#ffb000', '#00f0f0'],
            },
            shape: {
                type: 'circle',
            },
            opacity: {
                value: { min: 0.3, max: 0.8 },
            },
            size: {
                value: { min: 1, max: 3 },
            },
            links: {
                enable: true,
                distance: 100,
                color: 'random',
                opacity: 0.4,
                width: 1,
                warp: true,
            },
            move: {
                enable: true,
                speed: 1,
                direction: 'none',
                random: true,
                straight: false,
                outModes: 'out',
            },
        },
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: 'repulse',
                },
                onClick: {
                    enable: true,
                    mode: 'push',
                },
            },
            modes: {
                repulse: {
                    distance: 100,
                    duration: 0.4,
                    divs: {
                        selectors: '#terminal-window',
                        distance: 200,
                        duration: 0.4,
                    }
                },
                push: {
                    quantity: 4,
                },
                bubble: {
                    distance: 200,
                    size: 8,
                    duration: 2,
                    opacity: 1,
                },
            },
        },
    }), []);

    if (init) {
        return <Particles id="tsparticles" options={options} />;
    }

    return <></>;
};

export default MatrixBackground; 