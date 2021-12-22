function setup()
{
    canvas=createCanvas(648,324)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()

}

function draw()
{
image(video,25,25,598,274)
fill("coral")
circle(25,50,50)
circle(623,50,50)
circle(25,274,50)
circle(623,274,50)
}