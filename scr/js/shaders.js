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
        
       // Coordenadas UV ajustadas para que el centro sea (0, 0)
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    uv -= 0.5;
    uv.x *= u_resolution.x / u_resolution.y;

    // Distancia del centro
    float dist = length(uv);

    // Modifica el valor para crear círculos repetidos
    float rings = mod(dist * 6.0 - u_time * 0.5, 1.0);

    // Crea un borde para los círculos
    float border = smoothstep(0.35, 0.35, rings);

    // Colorea los círculos (negro sobre blanco)
    vec3 color = vec3(1.0,0.0,1.0) - border*0.5;
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
