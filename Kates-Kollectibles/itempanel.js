// Dynamically create Item list
// Code adapted from https://stackoverflow.com/questions/41741171/how-to-generate-dynamic-html-with-jquery-in-a-loop-and-a-json-with-parameters

// Create html panels
function createPanel(panelData) {
    
    var gallery = [];
    panelData["item_pics"].forEach(function(pic, i) {
        gallery.push(createGallery(pic));
    });

    var panelTemplate = `
        <div class="panel panel-default panel-mod">
            <div class="panel-heading steelblue">
                <div class="row">
                    <div class="col-sm-1">${panelData["item_id"]}</div>
                    <div class="col-sm-11">${panelData["item_name"]}</div>
                </div>
            </div>
            <div class="panel-body powderblue">
                <div class="row">
                    <div class="col-sm-3">${panelData["item_desc"]}</div>
                    <div class="col-sm-9">
                        ${gallery.join('\n')}
                    </div>
                </div>
            </div>
        </div>\n`;
    return panelTemplate;
};

//Create image gallery
function createGallery(galleryData) {
    var galleryTemplate = [`
                        <div class="gallery ${galleryData["width"]}">
                            <a target="_blank" href="${galleryData["image"]}">
                                <img src="${galleryData["thumb"]}" alt="image">
                            </a>
                            <div class="desc">${galleryData["caption"]}</div>
                        </div>\n`
    ];
    return galleryTemplate;
};

// Loop over JSON date from 'itemdb.js' and store all the panels
var panels = $();
itemdb.forEach(function(item, i) {
    panels = panels.add(createPanel(item));
});

// Add panels to the page
$(function() {
    $('.panel-group').append(panels);
});


