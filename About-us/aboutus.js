var history1="Natural history is a domain of inquiry involving organisms, including animals, fungi, and plants, in their natural environment, leaning more towards observational than experimental methods of study. A person who studies natural history is called a naturalist or natural historian."
var vision="Ten Simple Things You Can Do to Help Protect the Earth \
1.Reduce, reuse, and recycle. Cut down on what you throw away\
2.Volunteer. Volunteer for cleanups in your community\
3.Educate\
4.Conserve water\
5.Choose sustainable\
6.Shop wisely\
7.Use long-lasting light bulbs. \
8.Plant a tree."

var goal="\
The Global Goal for Nature identifies the level of ambition needed to achieve a nature-positive world with three measurable temporal objectives: Zero Net Loss of Nature from 2020, Net Positive by 2030, and Full Recovery by 2050."

function History1(){
  document.getElementById("content-div-header").innerText = "History.."
  document.getElementById("content-div-body").innerText= history1
}

function Vision(){
  document.getElementById("content-div-header").innerText = "Vision.."
  document.getElementById("content-div-body").innerText = vision
}

function Goals(){
  document.getElementById("content-div-header").innerText = "Goals.."
  document.getElementById("content-div-body").innerText = goal
}