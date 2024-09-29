import React from "react";
import { useState,useEffect,useRef } from "react";

const PlayJs = ()=>{
    const canvasRef = useRef(null);
    const particles = [];
    const numParticles = 5; // Number of particles created per frame
    const colors = ['#ff007f', '#ff7700', '#77ff00', '#00ffff', '#ff00ff'];

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        class Particle {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.size = Math.random() * 5 + 1;
                this.speedX = Math.random() * 3 - 1.5;
                this.speedY = Math.random() * 3 - 1.5;
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.size > 0.2) this.size -= 0.1;
            }

            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }
        }

        const createParticles = () => {
            const xPos = Math.random() * canvas.width;
            const yPos = Math.random() * canvas.height;
            for (let i = 0; i < numParticles; i++) {
                particles.push(new Particle(xPos, yPos));
            }
        }

        const animateParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((particle, index) => {
                particle.update();
                particle.draw();
                if (particle.size <= 0.2) {
                    particles.splice(index, 1); // Remove small particles
                }
            });
            createParticles(); // Continuously create new particles
            requestAnimationFrame(animateParticles);
        }

        animateParticles(); // Start the animation

        return () => {
            cancelAnimationFrame(animateParticles);
        };
    }, []);

    return <canvas ref={canvasRef} style={{ display: 'block', margin: 0 }} />;


    // const canvasRef = useRef(null);
    // const particles = [];
    // const numParticles = 100;
    // const colors = ['#ff007f', '#ff7700', '#77ff00', '#00ffff', '#ff00ff'];

    // useEffect(() => {
    //     const canvas = canvasRef.current;
    //     const ctx = canvas.getContext('2d');
    //     canvas.width = window.innerWidth;
    //     canvas.height = window.innerHeight;

    //     class Particle {
    //         constructor(x, y) {
    //             this.x = x;
    //             this.y = y;
    //             this.size = Math.random() * 5 + 1;
    //             this.speedX = Math.random() * 3 - 1.5;
    //             this.speedY = Math.random() * 3 - 1.5;
    //             this.color = colors[Math.floor(Math.random() * colors.length)];
    //         }

    //         update() {
    //             this.x += this.speedX;
    //             this.y += this.speedY;
    //             if (this.size > 0.2) this.size -= 0.1;
    //         }

    //         draw() {
    //             ctx.fillStyle = this.color;
    //             ctx.strokeStyle = this.color;
    //             ctx.lineWidth = 2;
    //             ctx.beginPath();
    //             ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    //             ctx.closePath();
    //             ctx.fill();
    //             ctx.stroke();
    //         }
    //     }

    //     const createParticles = (e) => {
    //         const xPos = e.x;
    //         const yPos = e.y;
    //         for (let i = 0; i < numParticles; i++) {
    //             particles.push(new Particle(xPos, yPos));
    //         }
    //     }

    //     const animateParticles = () => {
    //         ctx.clearRect(0, 0, canvas.width, canvas.height);
    //         for (let i = 0; i < particles.length; i++) {
    //             particles[i].update();
    //             particles[i].draw();
    //             if (particles[i].size <= 0.2) {
    //                 particles.splice(i, 1);
    //                 i--;
    //             }
    //         }
    //         requestAnimationFrame(animateParticles);
    //     }

    //     canvas.addEventListener('mousemove', createParticles);
    //     animateParticles();

    //     return () => {
    //         canvas.removeEventListener('mousemove', createParticles);
    //     };
    // }, []);

    // return <canvas ref={canvasRef} style={{ display: 'block', margin: 0 }} />;
}

export default PlayJs;