/* TEXT DISTORTION */
var text = new Blotter.Text("SASHA DIERYCKX", { 
    family : "Monument Extended Reg, sans-serif",
    size : 34,
    fill : "#f4f4f4",
    weight : 600,
});

var material = new Blotter.RollingDistortMaterial();
  
material.uniforms.uSpeed.value = 0.1;

var blotter = new Blotter(material, {
    texts : text
});

var title = document.getElementById("title");

var scope = blotter.forText(text);

scope.appendTo(title);
