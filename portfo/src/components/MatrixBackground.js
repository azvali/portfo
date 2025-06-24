import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const MatrixBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    const options = {
        background: {
            color: 'transparent',
        },
        fullScreen: {
            enable: true,
            zIndex: -1,
        },
        particles: {
            number: {
                value: 100,
                density: {
                    enable: true,
                    area: 800,
                },
            },
            color: {
                value: '#0f0',
            },
            shape: {
                type: 'char',
                character: {
                    value: ['0', '1'],
                    font: 'monospace',
                    style: '',
                    weight: '400',
                    fill: true,
                },
            },
            opacity: {
                value: { min: 0.3, max: 0.8 },
            },
            size: {
                value: 16,
                random: {
                    enable: true,
                    minimumValue: 10,
                },
            },
            move: {
                enable: true,
                speed: 3,
                direction: 'bottom',
                straight: true,
            },
            links: {
                enable: false,
            },
        },
    };

    return <Particles id="tsparticles" init={particlesInit} options={options} />;
};

export default MatrixBackground; 