import{r as G,j as me}from"./motion-CoZfXeRa.js";const pr=5e6,$=160,De=["lens","blob","cube","pill","torus","prism","diamond"],Ze={lens:1.02,blob:1.08,cube:1.32,pill:1.02,torus:1,prism:1.18,diamond:1.05},It={lens:[0,0,0],blob:[.2,0,0],cube:[-.48,.62,0],pill:[0,0,0],torus:[-.5,.18,0],prism:[-.3,.45,0],diamond:[-.35,.5,0]},re={lens:[0,0],blob:[1,0],cube:[1,0],pill:[0,0],torus:[0,1],prism:[1,0],diamond:[1,0]},vr=/\.(mp4|webm|ogv|ogg|mov|m4v)(\?|#|$)/i,xr=`#version 300 es
const vec2 corners[3] = vec2[3](vec2(-1.0, -1.0), vec2(3.0, -1.0), vec2(-1.0, 3.0));
void main() {
  gl_Position = vec4(corners[gl_VertexID], 0.0, 1.0);
}`,gr=`#version 300 es
precision highp float;
uniform vec2 uView;
uniform float uRatio;
uniform sampler2D uMedia;
uniform vec4 uMediaRect;
uniform float uMediaOn;
uniform sampler2D uText;
uniform float uTextOn;
uniform vec4 uBackground;
out vec4 fragColor;

void main() {
  vec2 w = gl_FragCoord.xy / uRatio;
  vec2 uv = vec2(w.x, uView.y - w.y) / uView;
  vec4 color = uBackground;
  if (uMediaOn > 0.5) {
    vec2 m = (uv - uMediaRect.xy) / uMediaRect.zw;
    if (m.x >= 0.0 && m.y >= 0.0 && m.x <= 1.0 && m.y <= 1.0) {
      vec4 media = texture(uMedia, m);
      color = media + color * (1.0 - media.a);
    }
  }
  if (uTextOn > 0.5) {
    vec4 text = texture(uText, uv);
    color = text + color * (1.0 - text.a);
  }
  fragColor = color;
}`,kt={lens:`{
    float a = length(p - vec3(0.0, 0.0, -1.85)) - 2.13;
    float b = length(p - vec3(0.0, 0.0, 1.85)) - 2.13;
    float h = clamp(0.5 - 0.5 * (b - a) / 0.2, 0.0, 1.0);
    return mix(b, a, h) + 0.2 * h * (1.0 - h);
  }`,blob:`{
    vec3 q = p * 1.6;
    float t = uTime;
    float n = sin(q.x + t * 1.1) * sin(q.y * 1.15 - t * 0.9) * sin(q.z * 0.95 + t * 0.8);
    n += 0.45 * sin(q.x * 1.6 - t * 0.6 + q.z) * sin(q.y * 1.9 + t * 1.2 + q.x * 0.5);
    return (length(p) - 0.92 - 0.085 * n) * 0.78;
  }`,cube:`{
    vec3 q = abs(p) - vec3(0.6);
    return length(max(q, 0.0)) + min(max(q.x, max(q.y, q.z)), 0.0) - 0.16;
  }`,pill:`{
    float outline = length(vec2(max(abs(p.x) - 0.58, 0.0), p.y)) - 0.42;
    vec2 q = vec2(outline + 0.16, abs(p.z) - 0.16);
    return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - 0.16;
  }`,torus:`{
    vec2 q = vec2(length(p.xy) - 0.68, p.z);
    return length(q) - 0.3;
  }`,prism:`{
    vec3 q = abs(p);
    float side = max(q.x * 0.866025 + p.y * 0.5, -p.y) - 0.5;
    float d = max(q.z - 0.34, side);
    return d - 0.08;
  }`,diamond:`{
    vec3 q = abs(p);
    return (q.x + q.y * 0.92 + q.z * 1.25 - 0.98) * 0.5;
  }`},br=`
  float rim = tr.mode > 1.5 ? 1.0 - smoothstep(0.3, 0.55, clamp(-dot(rd, tr.n), 0.0, 1.0)) : tr.mode;
  if (rim > 0.0) {
    vec2 offsets[3] = vec2[3](vec2(0.33, 0.33), vec2(-0.33, 0.25), vec2(0.25, -0.33));
    float scatter = (length(tx) + length(ty)) / max(uBound, 1.0);
    for (int k = 0; k < 3; k++) {
      vec2 sub = w + offsets[k] * pixel;
      vec3 subDir = normalize(vec3(sub, 0.0) - camera);
      Trace st = traceSurface(ro, subDir, eps, pixel);
      if (st.mode > 1.5 && (uTint.a > 0.0 || bandOf(clamp(-dot(subDir, st.n), 0.0, 1.0), scatter) < 1.0)) {
        traceInterior(st, subDir, eps);
      }
      color += shadeTrace(st, subDir, background, tone, sub, tx, ty, rx, ry);
    }
    color *= 0.25;
  }`,yr=(a,i,h)=>`#version 300 es
precision highp float;
uniform vec2 uView;
uniform float uRatio;
uniform float uFocal;
uniform vec3 uCenter;
uniform mat3 uInverse;
uniform float uScale;
uniform float uBound;
uniform float uMorph;
uniform float uRipple;
uniform float uTime;
uniform float uIor;
uniform float uDispersion;
uniform float uReflection;
uniform float uFrost;
uniform vec4 uTint;
uniform float uShadow;
uniform vec3 uLight;
uniform float uPresence;
uniform sampler2D uMedia;
uniform vec4 uMediaRect;
uniform float uMediaOn;
uniform sampler2D uText;
uniform float uTextOn;
uniform vec4 uBackground;
uniform float uPass;
uniform sampler2D uShadowMap;
uniform vec4 uShadowBox;
uniform vec2 uShadowSize;
out vec4 fragColor;

float shapeA(vec3 p) ${kt[a]}
float shapeB(vec3 p) ${kt[i]}

float field(vec3 p) {
  float d = shapeA(p);
  ${a!==i?"d = mix(d, shapeB(p), uMorph);":""}
  if (uRipple > 0.0) {
    d += uRipple * sin(p.x * 3.1 + uTime * 2.3) * sin(p.y * 3.4 - uTime * 1.9) * sin(p.z * 2.9 + uTime * 1.6);
  }
  return d;
}

float map(vec3 w) {
  return field(uInverse * (w - uCenter)) * uScale;
}

vec3 normalAt(vec3 w) {
  float e = 0.35;
  vec2 k = vec2(1.0, -1.0);
  return normalize(
    k.xyy * map(w + k.xyy * e) +
    k.yyx * map(w + k.yyx * e) +
    k.yxy * map(w + k.yxy * e) +
    k.xxx * map(w + k.xxx * e)
  );
}

vec4 content(vec2 w, vec2 gx, vec2 gy) {
  vec2 uv = vec2(w.x, uView.y - w.y) / uView;
  vec2 dx = vec2(gx.x, -gx.y) / uView;
  vec2 dy = vec2(gy.x, -gy.y) / uView;
  vec4 color = uBackground;
  if (uMediaOn > 0.5) {
    vec2 m = (uv - uMediaRect.xy) / uMediaRect.zw;
    vec2 inside = step(vec2(0.0), m) * step(m, vec2(1.0));
    vec4 media = textureGrad(uMedia, m, dx / uMediaRect.zw, dy / uMediaRect.zw) * inside.x * inside.y;
    color = media + color * (1.0 - media.a);
  }
  if (uTextOn > 0.5) {
    vec4 text = textureGrad(uText, uv, dx, dy);
    color = text + color * (1.0 - text.a);
  }
  return color;
}

vec4 frosted(vec2 w, vec2 gx, vec2 gy) {
  if (uFrost <= 0.0) return content(w, gx, gy);
  float r = uFrost * 16.0;
  vec2 bx = gx + vec2(r * 0.35, 0.0);
  vec2 by = gy + vec2(0.0, r * 0.35);
  vec4 sum = content(w, bx, by) * 0.2;
  for (int i = 0; i < 8; i++) {
    float a = float(i) * 0.785398 + 0.3;
    sum += content(w + vec2(cos(a), sin(a)) * r * (0.55 + 0.45 * float(i & 1)), bx, by) * 0.1;
  }
  return sum;
}

vec3 studio(vec3 d) {
  vec2 a = vec2(atan(d.x, d.z), d.y);
  float key = smoothstep(0.42, 0.22, abs(a.x + 0.62)) * smoothstep(0.3, 0.12, abs(a.y - 0.5));
  float strip = smoothstep(0.12, 0.05, abs(a.x - 0.95)) * smoothstep(0.8, 0.35, abs(a.y - 0.05));
  float dome = smoothstep(0.0, 1.0, d.z) * 0.04;
  return vec3(18.0) * key + vec3(8.0) * strip + vec3(dome);
}

vec4 light(vec3 d, float weight) {
  vec3 c = studio(d) * weight;
  float a = clamp(max(c.r, max(c.g, c.b)), 0.0, 1.0);
  return vec4(min(c, vec3(a)), a);
}

vec2 landing(vec3 o, vec3 d, vec2 fallback) {
  if (d.z > -0.0005) return fallback;
  return o.xy + d.xy * (-o.z / d.z);
}

float shadowAt(vec2 w, out float caustic) {
  caustic = 0.0;
  if (uShadow <= 0.0) return 0.0;
  vec3 p = vec3(w, 0.0);
  vec2 footprint = uCenter.xy + uLight.xy / uLight.z * uCenter.z;
  if (length(w - footprint) > uBound * 1.6) return 0.0;
  float t = 2.0;
  float occlusion = 1.0;
  float deepest = 1e5;
  for (int i = 0; i < 28; i++) {
    float h = map(p + uLight * t);
    deepest = min(deepest, h);
    if (h > 0.0) occlusion = min(occlusion, 6.0 * h / t);
    if (t > uCenter.z * 2.6 + uBound * 2.0) break;
    t += clamp(abs(h) * 0.8, 2.0, uBound * 0.25);
  }
  if (deepest > 0.0) return (1.0 - clamp(occlusion, 0.0, 1.0)) * 0.36;
  float depth = -deepest / max(uBound, 1.0);
  caustic = smoothstep(0.12, 0.5, depth) * (uIor - 1.0) * 2.0;
  return exp(-depth * 14.0) * 0.42;
}

vec2 shadowSample(vec2 w) {
  if (uShadow <= 0.0) return vec2(0.0);
  vec2 uv = (w - uShadowBox.xy) / uShadowBox.zw;
  if (any(lessThan(uv, vec2(0.0))) || any(greaterThan(uv, vec2(1.0)))) return vec2(0.0);
  vec2 s = textureLod(uShadowMap, uv, 0.0).rg;
  return vec2(s.x * 0.42, s.y * 2.0);
}

vec2 lighting(vec2 w, float under) {
  vec2 s = shadowSample(w);
  float dark = s.x * uShadow * uPresence;
  float glow = clamp(s.y * uShadow * uPresence, 0.0, 1.0) * mix(0.12, 0.3, under);
  return vec2(dark * mix(0.45, 1.0, under), glow);
}

vec4 shade(vec4 color, vec2 factors) {
  vec3 rgb = color.rgb * (1.0 - factors.x);
  float alpha = color.a + factors.x - color.a * factors.x;
  rgb = vec3(factors.y) + rgb * (1.0 - factors.y);
  alpha = factors.y + alpha * (1.0 - factors.y);
  return vec4(rgb, alpha);
}

struct Trace {
  float mode;
  float cover;
  vec3 p;
  vec3 n;
  vec3 q;
  vec3 inside;
  vec3 exitNormal;
  vec3 exitDir;
  float escaped;
  float travel;
  float bounces;
};

Trace traceSurface(vec3 ro, vec3 rd, float eps, float pixel) {
  Trace tr;
  tr.mode = 0.0;
  tr.cover = 0.0;
  tr.p = vec3(0.0);
  tr.n = vec3(0.0, 0.0, 1.0);
  tr.q = vec3(0.0);
  tr.inside = vec3(0.0, 0.0, -1.0);
  tr.exitNormal = vec3(0.0, 0.0, 1.0);
  tr.exitDir = vec3(0.0, 0.0, -1.0);
  tr.escaped = 0.0;
  tr.travel = 0.0;
  tr.bounces = 0.0;
  vec3 oc = ro - uCenter;
  float b = dot(oc, rd);
  float c = dot(oc, oc) - uBound * uBound;
  float disc = b * b - c;
  if (disc <= 0.0 || uPresence <= 0.0) return tr;
  float sq = sqrt(disc);
  float t = max(-b - sq, 0.0);
  float tEnd = -b + sq;
  float closest = 1e5;
  float closestT = t;
  bool hit = false;
  for (int i = 0; i < 96; i++) {
    float d = map(ro + rd * t);
    if (d < closest) {
      closest = d;
      closestT = t;
    }
    if (d < eps) {
      hit = true;
      break;
    }
    t += d * 0.9;
    if (t > tEnd) break;
  }
  if (!hit && closest < pixel * 0.35) {
    hit = true;
    t = closestT;
  }
  if (!hit) {
    tr.cover = clamp(1.0 - closest / (pixel * 1.2), 0.0, 1.0) * uPresence;
    if (tr.cover > 0.0) {
      tr.mode = 1.0;
      tr.p = ro + rd * closestT;
      tr.n = normalAt(tr.p);
    }
    return tr;
  }
  tr.mode = 2.0;
  tr.p = ro + rd * t;
  tr.n = normalAt(tr.p);
  return tr;
}

void traceInterior(inout Trace tr, vec3 rd, float eps) {
  vec3 inside = refract(rd, tr.n, 1.0 / uIor);
  vec3 q = tr.p + inside * eps * 4.0;
  vec3 exitDir = inside;
  bool escaped = false;
  for (int bounce = 0; bounce < 3; bounce++) {
    for (int i = 0; i < 64; i++) {
      float d = map(q);
      if (d > -eps) break;
      float stepLength = max(-d * 0.9, eps);
      q += inside * stepLength;
      tr.travel += stepLength;
    }
    vec3 n2 = normalAt(q);
    tr.exitNormal = n2;
    vec3 out1 = refract(inside, -n2, uIor);
    if (dot(out1, out1) > 0.0) {
      exitDir = out1;
      escaped = true;
      break;
    }
    inside = reflect(inside, -n2);
    q += inside * eps * 4.0;
    tr.bounces += 1.0;
  }
  if (!escaped) exitDir = inside;
  if (exitDir.z > -0.2) exitDir = normalize(vec3(exitDir.xy, -0.2 - abs(exitDir.z)));
  tr.q = q;
  tr.inside = inside;
  tr.exitDir = exitDir;
  tr.escaped = escaped ? 1.0 : 0.0;
}

float bandOf(float cosi, float scatter) {
  return max(smoothstep(0.42, 0.12, cosi), smoothstep(0.06, 0.24, scatter));
}

vec4 shadeTrace(Trace tr, vec3 rd, vec4 background, vec4 tone, vec2 w, vec2 tx, vec2 ty, vec2 rx, vec2 ry) {
  if (tr.mode < 0.5) return background;
  vec3 mirrorDir = reflect(rd, tr.n);
  if (tr.mode < 1.5) {
    vec4 edgeTone = tone * uReflection * 0.8 + light(mirrorDir, uReflection) * 0.5;
    return mix(background, edgeTone + background * (1.0 - edgeTone.a), tr.cover * 0.7);
  }
  float cosi = clamp(-dot(rd, tr.n), 0.0, 1.0);
  float f0 = pow((uIor - 1.0) / (uIor + 1.0), 2.0);
  float fresnel = f0 + (1.0 - f0) * pow(1.0 - cosi, 5.0);
  float band = bandOf(cosi, (length(tx) + length(ty)) / max(uBound, 1.0));

  vec4 mirror = tone * uReflection;
  vec4 transmitted = tone;
  if (band < 1.0) {
    mirror = mirrorDir.z < -0.0005 ? frosted(landing(tr.p, mirrorDir, w), rx, ry) * uReflection : light(mirrorDir, uReflection);
    vec2 hitT = landing(tr.q, tr.exitDir, w);
    vec4 green = frosted(hitT, tx, ty);
    vec4 red = green;
    vec4 blue = green;
    if (tr.escaped > 0.5 && uDispersion > 0.0) {
      vec3 spread = vec3(-1.0, 0.0, 1.0) * uDispersion * 0.06;
      vec3 dirR = refract(tr.inside, -tr.exitNormal, uIor + spread.x);
      vec3 dirB = refract(tr.inside, -tr.exitNormal, uIor + spread.z);
      if (dot(dirR, dirR) > 0.0 && dirR.z < -0.2) red = frosted(landing(tr.q, dirR, hitT), tx, ty);
      if (dot(dirB, dirB) > 0.0 && dirB.z < -0.2) blue = frosted(landing(tr.q, dirB, hitT), tx, ty);
    }
    vec2 factors = lighting(hitT, 0.0);
    red = shade(red, factors);
    green = shade(green, factors);
    blue = shade(blue, factors);
    transmitted = mix(vec4(red.r, green.g, blue.b, green.a), tone, band);
    mirror = mix(mirror, tone * uReflection, band);
  }

  vec3 tint = pow(max(uTint.rgb, vec3(0.001)), vec3(uTint.a * tr.travel / max(uBound, 1.0)));
  transmitted.rgb *= tint;
  float body = (1.0 - dot(tint, vec3(0.3333))) * 0.7;
  transmitted += vec4(uTint.rgb * body, body) * (1.0 - transmitted.a);

  vec4 reflected = mirrorDir.z < -0.0005 ? mirror * fresnel : light(mirrorDir, uReflection * fresnel);
  vec4 glass = reflected + transmitted * (1.0 - reflected.a);
  float edge = 1.0 - smoothstep(0.04, 0.3, cosi);
  glass = mix(glass, mirror + background * (1.0 - mirror.a), edge);
  vec2 facing = normalize(vec2(-0.42, 0.55));
  float rimLight = pow(1.0 - cosi, 3.0) * (0.25 + 0.75 * abs(dot(normalize(tr.n.xy + 1e-5), facing))) * 0.55 * uReflection;
  rimLight *= smoothstep(0.0, 0.08, cosi);
  glass = vec4(rimLight) + glass * (1.0 - rimLight);
  return mix(background, glass, uPresence);
}

void main() {
  if (uPass > 0.5) {
    float caustic;
    float dark = shadowAt(uShadowBox.xy + gl_FragCoord.xy / uShadowSize * uShadowBox.zw, caustic);
    fragColor = vec4(dark / 0.42, caustic * 0.5, 0.0, 1.0);
    return;
  }
  vec2 w = gl_FragCoord.xy / uRatio;
  vec3 camera = vec3(uView * 0.5, uFocal);
  vec3 ro = camera;
  vec3 rd = normalize(vec3(w, 0.0) - camera);
  float pixel = 1.0 / uRatio;
  float eps = 0.25 * pixel;

  Trace tr = traceSurface(ro, rd, eps, pixel);
  if (tr.mode > 1.5) traceInterior(tr, rd, eps);
  vec2 hitT = tr.mode > 1.5 ? landing(tr.q, tr.exitDir, w) : w;
  vec2 hitR = tr.mode > 0.5 ? landing(tr.p, reflect(rd, tr.n), w) : w;
  vec2 tx = dFdx(hitT);
  vec2 ty = dFdy(hitT);
  vec2 rx = dFdx(hitR);
  vec2 ry = dFdy(hitR);
  vec2 wx = dFdx(w);
  vec2 wy = dFdy(w);

  vec4 background = shade(content(w, wx, wy), lighting(w, 1.0));
  vec4 tone = tr.mode > 0.5 ? content(uCenter.xy, vec2(uBound * 1.4, 0.0), vec2(0.0, uBound * 1.4)) : vec4(0.0);
  vec4 color = shadeTrace(tr, rd, background, tone, w, tx, ty, rx, ry);
  ${h?br:""}
  fragColor = color;
}`,g=(a,i,h)=>Math.min(h,Math.max(i,a)),qt=a=>{const i=String(a||"").trim(),h=/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(i);if(h){const _=h[1].length===3?h[1].replace(/./g,w=>w+w):h[1];return[0,2,4].map(w=>parseInt(_.slice(w,w+2),16)/255).concat(1)}const d=/^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)(?:[\s,/]+([\d.]+%?))?/i.exec(i);if(d){const _=d[4]===void 0?1:d[4].endsWith("%")?parseFloat(d[4])/100:parseFloat(d[4]);return[d[1],d[2],d[3]].map(w=>g(parseFloat(w)/255,0,1)).concat(g(_,0,1))}return null},Ct=(a,i,h)=>{const d=a.createShader(i);return d?(a.shaderSource(d,h),a.compileShader(d),d):null},Tr=a=>{const i=g(a,0,1);return i*i*i*(i*(i*6-15)+10)},oe=(a,i,h)=>{const d=Math.cos(a/2),_=Math.sin(a/2),w=Math.cos(i/2),X=Math.sin(i/2),O=Math.cos(h/2),F=Math.sin(h/2);return[_*w*O-d*X*F,d*X*O+_*w*F,d*w*F-_*X*O,d*w*O+_*X*F]},Se=(a,i)=>[a[3]*i[0]+a[0]*i[3]+a[1]*i[2]-a[2]*i[1],a[3]*i[1]-a[0]*i[2]+a[1]*i[3]+a[2]*i[0],a[3]*i[2]+a[0]*i[1]-a[1]*i[0]+a[2]*i[3],a[3]*i[3]-a[0]*i[0]-a[1]*i[1]-a[2]*i[2]],Je=(a,i,h)=>{let d=a[0]*i[0]+a[1]*i[1]+a[2]*i[2]+a[3]*i[3];const _=d<0?i.map(L=>-L):i;if(d=Math.abs(d),d>.9995){const L=a.map((J,Le)=>J+(_[Le]-J)*h),ne=Math.hypot(...L);return L.map(J=>J/ne)}const w=Math.acos(d),X=Math.sin(w),O=Math.sin((1-h)*w)/X,F=Math.sin(h*w)/X;return a.map((L,ne)=>L*O+_[ne]*F)},Nt=(a,i)=>[Math.sin(a*.37)*i*.35+Math.sin(a*.71+1.3)*i*.12,Math.sin(a*.29+.8)*i*.2+Math.cos(a*.53)*i*.08],wr=([a,i,h,d])=>[1-2*(i*i+h*h),2*(a*i+h*d),2*(a*h-i*d),2*(a*i-h*d),1-2*(a*a+h*h),2*(i*h+a*d),2*(a*h+i*d),2*(i*h-a*d),1-2*(a*a+i*i)],Rr=({text:a="Look closer.",textColor:i,fontFamily:h,fontWeight:d=600,fontSize:_,src:w,fit:X="cover",background:O="transparent",shape:F="torus",shapes:L,size:ne=260,refraction:J=1,dispersion:Le=.35,reflection:zt=1,frost:Ot=0,color:Yt="#ffffff",tint:Gt=0,shadow:$t=.5,elevation:Vt=.4,interaction:Qe="follow",smoothness:Ht=.5,wobble:Wt=.5,spin:Kt=.3,idle:jt=!0,morphOnClick:et=!0,onShapeChange:Zt,position:tt=[.5,.5],intro:Jt=!0,maxDevicePixelRatio:Qt=2,className:rt="",style:er,children:ot})=>{const nt=G.useRef(null),it=G.useRef(null),at=G.useRef(null),Pe=G.useRef(null),[st,tr]=G.useState(0),ct=Array.isArray(L)&&L.length?L.filter(D=>De.includes(D)):De,lt={text:String(a??""),textColor:i,fontFamily:h,fontWeight:d,fontSize:_,src:w,fit:X,background:qt(O)||[0,0,0,0],shape:De.includes(F)?F:"torus",cycle:ct.length?ct:De,size:Math.max(16,ne),ior:1+.5*g(J,0,2),dispersion:g(Le,0,1),reflection:g(zt,0,2),frost:g(Ot,0,1),color:qt(Yt)||[1,1,1,1],tint:g(Gt,0,1),shadow:g($t,0,1),elevation:g(Vt,0,3),interaction:Qe,smoothness:g(Ht,0,1),wobble:g(Wt,0,1),spin:Kt,idle:jt,morphOnClick:et,onShapeChange:Zt,position:[g(tt?.[0]??.5,0,1),g(tt?.[1]??.5,0,1)],intro:Jt,maxRatio:g(Qt,.5,3)},R=G.useRef(lt);return R.current=lt,G.useEffect(()=>{Pe.current?.()}),G.useEffect(()=>{const D=nt.current,E=it.current;if(!D||!E)return;const e=E.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1,powerPreference:"high-performance"});if(!e)return;const ut=e.getExtension("KHR_parallel_shader_compile"),dt=Ct(e,e.VERTEX_SHADER,xr),he=new Map,V=t=>{const n=t==="content"?t:`${t}>${v.ratio<1.75?1:0}`;if(he.has(n))return he.get(n);const[o,c,l]=n.split(">"),f=Ct(e,e.FRAGMENT_SHADER,n==="content"?gr:yr(o,c,l==="1")),y=e.createProgram();e.attachShader(y,dt),e.attachShader(y,f),e.linkProgram(y);const x={program:y,fragment:f,uniforms:null,failed:!1};return he.set(n,x),x},Be=t=>{if(t.failed)return!1;if(t.uniforms)return!0;if(ut&&!e.getProgramParameter(t.program,ut.COMPLETION_STATUS_KHR))return!1;if(!e.getProgramParameter(t.program,e.LINK_STATUS))return console.error(e.getShaderInfoLog(t.fragment)||e.getProgramInfoLog(t.program)),t.failed=!0,!1;const n={},o=e.getProgramParameter(t.program,e.ACTIVE_UNIFORMS);for(let c=0;c<o;c++){const l=e.getActiveUniform(t.program,c);l&&(n[l.name]=e.getUniformLocation(t.program,l.name))}return t.uniforms=n,!0},P=window.matchMedia("(prefers-reduced-motion: reduce)").matches,Ue=e.createVertexArray(),ft=()=>{const t=e.createTexture();return e.bindTexture(e.TEXTURE_2D,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array(4)),e.generateMipmap(e.TEXTURE_2D),t},pe=ft(),Xe=ft(),ve=e.createTexture();e.bindTexture(e.TEXTURE_2D,ve),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,$,$,0,e.RGBA,e.UNSIGNED_BYTE,null);const Fe=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,Fe),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ve,0),e.bindFramebuffer(e.FRAMEBUFFER,null);const xe=document.createElement("canvas"),v={width:1,height:1,ratio:1},p={src:null,clip:null,image:null,ready:!1,width:1,height:1},ie={key:"",ready:!1},u={x:0,y:0,inside:!1,down:!1,grabbed:!1,offsetX:0,offsetY:0,startX:0,startY:0},r={x:0,y:0,vx:0,vy:0,spin:0,ripple:0,dirX:1,dirY:0,anchorX:0,anchorY:0},b={stretch:1,vstretch:0,tiltX:0,vtiltX:0,tiltY:0,vtiltY:0,scale:0,vscale:0};let mt=!1,H=!1;const s={from:R.current.shape,to:R.current.shape,t:1,pending:null};let ht=R.current.shape,Q=R.current.intro&&!P&&st===0?0:1;Q===1&&(b.scale=1);let pt=0,Ie=Math.random()*20,I=0,ke=!1,ge=0,vt=0,qe=1e3/60,Ce=0,W=!1,ee=!0,te=document.visibilityState!=="hidden",Ne=!1,ae=null;const ze=()=>{const t=R.current,n=getComputedStyle(D),o=t.fontFamily||n.fontFamily||"sans-serif",c=t.textColor||n.color||"#ffffff",l=E.width,f=E.height,y=[t.text,o,c,t.fontWeight,t.fontSize,l,f].join("|");if(y===ie.key)return;ie.key=y,xe.width=l,xe.height=f;const x=xe.getContext("2d");x.clearRect(0,0,l,f);const A=t.text.split(`
`);if(t.text.trim()){const k=v.ratio,q=S=>`${t.fontWeight} ${S}px ${o}`;let B=t.fontSize?t.fontSize*k:f*.36;if(!t.fontSize){x.font=q(100);const S=Math.max(...A.map(We=>x.measureText(We).width),1);B=Math.min(l*.84*100/S,f*.64/(A.length*1.02))}x.font=q(B),x.fillStyle=c,x.textAlign="center",x.textBaseline="alphabetic","letterSpacing"in x&&(x.letterSpacing=`${-.03*B}px`);const U=x.measureText("Hg"),K=U.actualBoundingBoxAscent||B*.72,Ve=U.actualBoundingBoxDescent||B*.2,ce=B*1.02,He=ce*(A.length-1)+K+Ve;let le=(f-He)/2+K;A.forEach(S=>{x.fillText(S,l/2,le),le+=ce})}e.bindTexture(e.TEXTURE_2D,Xe),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,xe),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.generateMipmap(e.TEXTURE_2D),ie.ready=!!t.text.trim()},xt=()=>{p.clip&&(p.clip.pause(),p.clip.removeAttribute("src"),p.clip.load(),p.clip=null)},gt=()=>{const t=R.current;if(t.src!==p.src&&(xt(),p.src=t.src,p.ready=!1,p.image=null,!!t.src))if(vr.test(t.src)){const n=document.createElement("video");n.crossOrigin="anonymous",n.muted=!0,n.loop=!0,n.playsInline=!0,n.autoplay=!0,n.preload="auto",n.src=t.src,n.addEventListener("loadeddata",()=>{p.clip===n&&(p.width=n.videoWidth||1,p.height=n.videoHeight||1,p.ready=!0,M())}),n.play().catch(()=>{}),p.clip=n}else{const n=new Image;n.crossOrigin="anonymous",n.decoding="async",n.onload=()=>{ke||p.image!==n||(p.width=n.naturalWidth||1,p.height=n.naturalHeight||1,e.bindTexture(e.TEXTURE_2D,pe),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,n),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.generateMipmap(e.TEXTURE_2D),p.ready=!0,M())},n.src=t.src,p.image=n}};let Oe=!1;const rr=()=>{const t=R.current,n=D.getBoundingClientRect(),o=Math.max(1,n.width),c=Math.max(1,n.height),l=Math.min(window.devicePixelRatio||1,t.maxRatio,Math.sqrt(pr/(o*c))),f=Math.max(1,Math.round(o*l)),y=Math.max(1,Math.round(c*l));if((E.width!==f||E.height!==y)&&(E.width=f,E.height=y),v.width=o,v.height=c,v.ratio=f/o,!mt)r.x=t.position[0]*o,r.y=t.position[1]*c,r.anchorX=r.x,r.anchorY=r.y,mt=!0;else if(t.interaction==="drag"){const x=se()*1.08;r.anchorX=g(r.anchorX,x,Math.max(x,o-x)),r.anchorY=g(r.anchorY,x,Math.max(x,c-x))}ze()},Ye=()=>{Oe=!0,M()},se=()=>{const t=R.current;return Math.min(t.size/2,Math.min(v.width,v.height)*.36)},bt=(t,n)=>{e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,pe),e.uniform1i(t.uMedia,0),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,Xe),e.uniform1i(t.uText,1),e.uniform2f(t.uView,v.width,v.height),e.uniform1f(t.uRatio,v.ratio);let o=[0,0,1,1];if(p.ready){const l=v.width/v.height,f=p.width/p.height;if(f>l==(n.fit!=="contain")){const y=f/l;o=[(1-y)/2,0,y,1]}else{const y=l/f;o=[0,(1-y)/2,1,y]}}e.uniform4f(t.uMediaRect,o[0],o[1],o[2],o[3]),e.uniform1f(t.uMediaOn,p.ready?1:0),e.uniform1f(t.uTextOn,ie.ready?1:0);const c=n.background;e.uniform4f(t.uBackground,c[0]*c[3],c[1]*c[3],c[2]*c[3],c[3])},Ge=()=>{const t=R.current,n=se(),o=t.idle&&!P?Nt(Ie,n):[0,0],c=n*1.08;r.anchorX=g(r.x,c,Math.max(c,v.width-c))-o[0],r.anchorY=g(r.y,c,Math.max(c,v.height-c))-o[1]},be=(t,n,o,c,l)=>{const f=`v${t}`,y=Math.max(1,Math.ceil(l/(1/240))),x=l/y;for(let k=0;k<y;k++)b[f]+=(o*o*(n-b[t])-2*c*o*b[f])*x,b[t]+=b[f]*x;const A=Math.abs(n-b[t])<5e-4&&Math.abs(b[f])<.002;return A&&(b[t]=n,b[f]=0),!A},ye=t=>{if(I=0,Oe&&(Oe=!1,rr()),Ne)return;const n=t-vt;if(vt=t,n>2&&n<100&&(qe+=(n-qe)*.1),W&&Ce<Math.round(12/qe)-1){Ce+=1,ee&&te&&(I=requestAnimationFrame(ye));return}Ce=0;const o=R.current,c=g((t-ge)/1e3||0,0,.05);ge=Math.max(ge,t),pt+=c;let l=!1;if(o.shape!==ht&&(ht=o.shape,s.pending=o.shape),s.pending&&s.t>=1){const m=`${s.to}>${s.pending}`,z=V(m);Be(z)&&(V(`${s.pending}>${s.pending}`),s.from=s.to,s.to=s.pending,s.pending=null,s.t=0,b.vstretch-=2.5*o.wobble,s.to!==s.from&&o.onShapeChange?.(s.to)),l=!0}if(s.t<1&&(s.t=Math.min(1,s.t+c/(P?.35:.85)),l=!0),o.morphOnClick&&o.cycle.length>1&&!s.pending){const m=o.cycle.indexOf(s.to);V(`${s.to}>${o.cycle[(m+1)%o.cycle.length]}`)}const f=se();!u.grabbed&&o.interaction!=="drag"&&(r.anchorX=o.position[0]*v.width,r.anchorY=o.position[1]*v.height);const y=o.idle&&!P;y&&!u.grabbed&&(Ie+=c,l=!0);const x=y?Nt(Ie,f):[0,0];let A=r.anchorX+x[0],k=r.anchorY+x[1];o.interaction==="follow"&&u.inside&&(A=u.x,k=u.y);const q=(u.grabbed?34:24)*Math.pow(.18,o.smoothness)*(P?1.6:1),B=Math.max(1,Math.ceil(c/(1/240))),U=c/B;if(u.grabbed&&(A=u.x-u.offsetX,k=u.y-u.offsetY,H=!1),H){const m=f*1.08;for(let z=0;z<B;z++){r.x+=r.vx*U,r.y+=r.vy*U;const fe=Math.exp(-U*1.4);r.vx*=fe,r.vy*=fe,(r.x<m||r.x>v.width-m)&&(r.x=g(r.x,m,Math.max(m,v.width-m)),b.vstretch-=Math.min(4,Math.abs(r.vx)*.0016)*o.wobble,r.vx*=-.62),(r.y<m||r.y>v.height-m)&&(r.y=g(r.y,m,Math.max(m,v.height-m)),b.vstretch-=Math.min(4,Math.abs(r.vy)*.0016)*o.wobble,r.vy*=-.62)}Math.hypot(r.vx,r.vy)<30&&(H=!1,Ge()),l=!0}else{for(let m=0;m<B;m++)r.vx+=(q*q*(A-r.x)-2*.86*q*r.vx)*U,r.vy+=(q*q*(k-r.y)-2*.86*q*r.vy)*U,r.x+=r.vx*U,r.y+=r.vy*U;(Math.abs(A-r.x)+Math.abs(k-r.y)>.05||Math.hypot(r.vx,r.vy)>.5)&&(l=!0)}const K=Math.hypot(r.vx,r.vy);K>1&&(r.dirX=r.vx/K,r.dirY=r.vy/K);const Ve=1+g(K/1800,0,.55)*o.wobble*(P?0:1);l=be("stretch",Ve,13,.32,c)||l;const ce=P?0:45e-5;l=be("tiltX",g(r.vy*ce,-.7,.7),9,.5,c)||l,l=be("tiltY",g(r.vx*ce,-.7,.7),9,.5,c)||l,!P&&(s.to==="blob"||s.from==="blob"&&s.t<1)&&(l=!0),!P&&o.spin&&(r.spin+=c*o.spin,l=!0);const He=s.t<1?`${s.from}>${s.to}`:`${s.to}>${s.to}`,le=V(He);if(Be(le)?ae=le:l=!0,ae&&(Q<1&&(Q=Math.min(1,Q+c/.5),l=!0),l=be("scale",1,11,.52,c)||l),r.ripple+=((s.t<1?.05*o.wobble*Math.sin(Math.PI*s.t):0)-r.ripple)*(1-Math.exp(-c/.08)),p.clip&&p.ready&&!p.clip.paused&&(e.bindTexture(e.TEXTURE_2D,pe),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,p.clip),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.generateMipmap(e.TEXTURE_2D),l=!0),!ae){const m=V("content");Be(m)&&(e.viewport(0,0,E.width,E.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.useProgram(m.program),e.bindVertexArray(Ue),bt(m.uniforms,o),e.drawArrays(e.TRIANGLES,0,3)),ee&&te&&(I=requestAnimationFrame(ye));return}const S=Tr(s.t),We=Ze[s.from]+(Ze[s.to]-Ze[s.from])*S,Ke=f/We,we=Math.max(.001,b.scale),or=oe(...It[s.from]),nr=oe(...It[s.to]);let j=Je(or,nr,S);const Lt=re[s.from][0]+(re[s.to][0]-re[s.from][0])*S,ir=re[s.from][1]+(re[s.to][1]-re[s.from][1])*S,Pt=r.spin%(Math.PI*2),ar=Je([0,0,0,1],oe(0,Pt,0),Lt),sr=Je([0,0,0,1],oe(0,0,Pt),ir);j=Se(Se(oe(Math.sin(r.spin*.6)*.18*Lt,0,0),ar),j),j=Se(sr,j),j=Se(oe(b.tiltX,b.tiltY,0),j);const C=wr(j),Z=Math.max(.2,b.stretch),N=1/Math.sqrt(Z),Ee=r.dirX,Re=-r.dirY,cr=[1/N+(1/Z-1/N)*Ee*Ee,(1/Z-1/N)*Ee*Re,0,(1/Z-1/N)*Ee*Re,1/N+(1/Z-1/N)*Re*Re,0,0,0,1/N],lr=[C[0],C[3],C[6],C[1],C[4],C[7],C[2],C[5],C[8]],Bt=new Float32Array(9);for(let m=0;m<3;m++)for(let z=0;z<3;z++){let fe=0;for(let Ae=0;Ae<3;Ae++)fe+=lr[Ae*3+z]*cr[m*3+Ae];Bt[m*3+z]=fe/(Ke*we)}const ur=Math.min(Z,N),dr=Math.max(Z,N),ue=Math.max(v.width,v.height)*1.6,de=Ke*(.35+o.elevation),fr=v.height-r.y,Ut=v.width/2+(r.x-v.width/2)*((ue-de)/ue),Xt=v.height/2+(fr-v.height/2)*((ue-de)/ue),Me=at.current;if(Me){const m=f*we*2;Me.style.width=`${m.toFixed(1)}px`,Me.style.height=`${m.toFixed(1)}px`,Me.style.transform=`translate3d(${(r.x-m/2).toFixed(1)}px, ${(r.y-m/2).toFixed(1)}px, 0)`}const T=ae.uniforms;e.useProgram(ae.program),e.bindVertexArray(Ue),bt(T,o),e.uniform1f(T.uFocal,ue),e.uniform3f(T.uCenter,Ut,Xt,de),e.uniformMatrix3fv(T.uInverse,!1,Bt),e.uniform1f(T.uScale,Ke*we*ur);const Ft=f*we*dr*1.08+2;e.uniform1f(T.uBound,Ft),e.uniform1f(T.uMorph,S),e.uniform1f(T.uRipple,r.ripple),e.uniform1f(T.uTime,P?0:pt),e.uniform1f(T.uIor,o.ior),e.uniform1f(T.uDispersion,o.dispersion),e.uniform1f(T.uReflection,o.reflection),e.uniform1f(T.uFrost,o.frost),e.uniform4f(T.uTint,o.color[0],o.color[1],o.color[2],o.tint*1.6),e.uniform1f(T.uShadow,o.shadow);const Y=[-.42,.55,1],je=Math.hypot(...Y);e.uniform3f(T.uLight,Y[0]/je,Y[1]/je,Y[2]/je),e.uniform1f(T.uPresence,Q);const _e=Ft*1.6*($/($-6))+1,mr=Ut+Y[0]/Y[2]*de,hr=Xt+Y[1]/Y[2]*de;e.uniform4f(T.uShadowBox,mr-_e,hr-_e,_e*2,_e*2),e.uniform2f(T.uShadowSize,$,$),e.uniform1i(T.uShadowMap,2),e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,null),o.shadow>0&&(e.bindFramebuffer(e.FRAMEBUFFER,Fe),e.viewport(0,0,$,$),e.uniform1f(T.uPass,1),e.drawArrays(e.TRIANGLES,0,3),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindTexture(e.TEXTURE_2D,ve)),e.viewport(0,0,E.width,E.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.uniform1f(T.uPass,0),e.drawArrays(e.TRIANGLES,0,3),W=!u.grabbed&&!H&&s.t>=1&&!s.pending&&Q>=1&&Math.abs(o.spin)<=1&&Math.hypot(r.vx,r.vy)<120&&Math.abs(b.vstretch)+Math.abs(b.vtiltX)+Math.abs(b.vtiltY)+Math.abs(b.vscale)<.05,l&&ee&&te&&(I=requestAnimationFrame(ye))},M=()=>{I||Ne||!ee||!te||(ge=performance.now(),I=requestAnimationFrame(ye))};Pe.current=()=>{W=!1,gt(),Ye(),M()};const $e=t=>{const n=D.getBoundingClientRect();return{x:t.clientX-n.left,y:t.clientY-n.top,inside:t.clientX>=n.left&&t.clientX<=n.right&&t.clientY>=n.top&&t.clientY<=n.bottom}},yt=t=>{const n=$e(t);u.x=n.x,u.y=n.y,u.inside=n.inside,(n.inside||u.grabbed)&&(W=!1),M()},Tt=t=>{const n=R.current,o=$e(t);if(!o.inside)return;u.x=o.x,u.y=o.y,u.inside=!0,u.down=!0;const c=Math.hypot(o.x-r.x,o.y-r.y)<se()*1.1;n.interaction==="drag"&&c&&(u.grabbed=!0,D.setAttribute("data-grabbing",""),H=!1,u.offsetX=o.x-r.x,u.offsetY=o.y-r.y),u.startX=o.x,u.startY=o.y,W=!1,M()},wt=t=>{const n=R.current;if(!u.down)return;u.down=!1;const o=$e(t),c=Math.hypot(o.x-u.startX,o.y-u.startY)>6,l=Math.hypot(o.x-r.x,o.y-r.y)<se()*1.1;if(u.grabbed&&(u.grabbed=!1,D.removeAttribute("data-grabbing"),H=Math.hypot(r.vx,r.vy)>60,H||Ge()),!c&&l&&o.inside&&(b.vstretch-=3*n.wobble,n.morphOnClick&&n.cycle.length>1)){const f=n.cycle.indexOf(s.pending||s.to);s.pending=n.cycle[(f+1)%n.cycle.length]}t.pointerType!=="mouse"&&(u.inside=!1),W=!1,M()},Te=()=>{W=!1,u.inside=!1,u.down=!1,u.grabbed&&(u.grabbed=!1,D.removeAttribute("data-grabbing"),Ge()),M()};window.addEventListener("pointermove",yt,{passive:!0}),window.addEventListener("pointerdown",Tt,{passive:!0}),window.addEventListener("pointerup",wt,{passive:!0}),window.addEventListener("pointercancel",Te,{passive:!0}),document.documentElement.addEventListener("pointerleave",Te);const Et=t=>{t.preventDefault(),Ne=!0,cancelAnimationFrame(I),I=0},Rt=()=>tr(t=>t+1);E.addEventListener("webglcontextlost",Et),E.addEventListener("webglcontextrestored",Rt);const Mt=new ResizeObserver(()=>{Ye(),M()});Mt.observe(D);const _t=()=>{p.clip&&(ee&&te?p.clip.play().catch(()=>{}):p.clip.pause())},At=new IntersectionObserver(t=>{ee=t.some(n=>n.isIntersecting),_t(),M()});At.observe(D);const Dt=()=>{te=document.visibilityState!=="hidden",_t(),M()};document.addEventListener("visibilitychange",Dt);const St=new MutationObserver(()=>{ze(),M()});return St.observe(document.documentElement,{attributes:!0,attributeFilter:["class","style","data-theme"]}),document.fonts?.ready&&document.fonts.ready.then(()=>{ke||(ie.key="",ze(),M())}),Ye(),V("content"),V(`${R.current.shape}>${R.current.shape}`),gt(),M(),()=>{ke=!0,cancelAnimationFrame(I),Pe.current=null,Mt.disconnect(),At.disconnect(),St.disconnect(),window.removeEventListener("pointermove",yt),window.removeEventListener("pointerdown",Tt),window.removeEventListener("pointerup",wt),window.removeEventListener("pointercancel",Te),document.documentElement.removeEventListener("pointerleave",Te),document.removeEventListener("visibilitychange",Dt),E.removeEventListener("webglcontextlost",Et),E.removeEventListener("webglcontextrestored",Rt),xt(),e.isContextLost()||(he.forEach(t=>{e.deleteProgram(t.program),e.deleteShader(t.fragment)}),e.deleteShader(dt),e.deleteTexture(pe),e.deleteTexture(Xe),e.deleteTexture(ve),e.deleteFramebuffer(Fe),e.deleteVertexArray(Ue))}},[st]),me.jsxs("div",{ref:nt,className:`fluid-glass${rt?` ${rt}`:""}`,style:er,"data-interaction":Qe,"data-clickable":et?"":void 0,children:[me.jsx("canvas",{ref:it,className:"fluid-glass__canvas","aria-hidden":"true"}),me.jsx("div",{ref:at,className:"fluid-glass__handle","aria-hidden":"true"}),a?me.jsx("p",{className:"fluid-glass__label",children:a}):null,ot?me.jsx("div",{className:"fluid-glass__content",children:ot}):null]})};export{Rr as default};
