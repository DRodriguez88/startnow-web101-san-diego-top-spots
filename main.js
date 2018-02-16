$.getJSON('data.JSON', function(data){
        var items = [];
        $.each(data, function(key, val){
           items.push(Object.values(val))
        })
        for (let i=0; i<items.length; i++){
            var name = document.createTextNode(items[i][0]);
            var tdName = document.createElement('td');
            tdName.appendChild(name);

            var description = document.createTextNode(items[i][1]);
            var tdDescription = document.createElement('td')
            tdDescription.appendChild(description);

            var link = 'https://www.google.com/maps?q=' + items[i][2];
            var linkText = document.createTextNode('Open in Google Maps');
            var aTag = document.createElement('a');
            aTag.appendChild(linkText);
            aTag.setAttribute('href', link);
            aTag.setAttribute('class', 'button');
            aTag.setAttribute('target', '_blank');
            var tdLink = document.createElement('td');
            tdLink.appendChild(aTag);

            var newTR = document.createElement('tr');
            newTR.appendChild(tdName);
            newTR.appendChild(tdDescription);
            newTR.appendChild(tdLink);

            var theTable = document.getElementById('theTable');
            theTable.appendChild(newTR);
            
        }
    })

