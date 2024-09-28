import { Color, ShaderMaterial } from "three"

const vshader = `
    varying vec2 v_uv;
    varying vec3 v_position;

    void main(){
        v_uv = uv;
        v_position = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`

const fshader = `
    uniform vec3 u_color; 
    uniform vec2 u_resolution;
    uniform float u_time;
    
    varying vec2 v_uv;
    varying vec3 v_position;

    void main()
    {
        float inCircle = 1.0 - step(0.5, length(v_position.xy));
        vec3 color = vec3(1.0,0.5,1.0)*inCircle;
        gl_FragColor = vec4(color, 1.0);
    }
`
export const uniforms = {
    u_time : { value: 0.0 },
    u_color: { value: new Color(0x8287c4)},
    u_resolution: { value: { x: 0, y: 0 } }
}

export const material = new ShaderMaterial({
    uniforms: uniforms,
    fragmentShader: fshader,
    vertexShader: vshader
});
