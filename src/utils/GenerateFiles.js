export const GenerateFiles = () => {

    const randomDate = (start, end) => {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }


    const data = [];

    
    const numFiles = Math.floor(Math.random() * 30) + 1;
    
    
    var mensNames = ['Elmo Curl','Tanner Shott','Joel Sturm','Darrel Strahl','Milo Roa','Amado Catlett','Boyce Doney','Millard Burdo','Vicente Selke','Bert Brownlow','Dustin Cooke','Antione Kwong','Juan Abril','Warner Alers','Odis Witmer','Tyrell Kroger','Gavin Trafton','Ian Whisnant','Emerson Maupin','Sebastian Woodrum','Jeramy Hanshaw','Mickey Dudding','Emilio Burges','Abe Borrero','Sylvester Darrah','Ward Duty','Ariel Storlie','Roosevelt Treloar','Nathanael Harryman','Clifford Benavides'];
    var womensNames = ['Zoe Parras','Angella Alonso','Johanne Tosi','Vena Brekke','Jayna Goatley','Margene Endicott','Kitty Seiber','Rina Zabriskie','Laurie Millette','Jeneva Burges','Renna Cropper','Natasha Gammon','Corrine Forcier','Denna Lassiter','Cordia Rosenblatt','Karissa Farnum','Kyung Touchstone','Latarsha Leong','Maddie Bounds','Magdalene Torsiello','Luann Vides','Laci Lathem','Rosita Blouin','Lia Delisa','Serina Keppel','Tashia Forshee','Shizuko Kim','Antonette Neitzel','Zella Caulder','Darby Rising'];
    var fileTypes = ['', '', '.mp4', '.pdf', '.png', '.ppt', '.csv', '.docx', '.zip']
    var adjectives = ['spotless','necessary','unruly','fantastic','false','acidic','pale','onerous','rabid','knotty','crowded','nutritious','mere','gullible','scientific'];
    var nouns = ['class','balance','agreement','minister','rabbits','health','water','pull','property','regret','clover','month'];
    
    

    for (let i = 0; i < numFiles; i++) {
        let filetype = Math.floor(Math.random() * 9) + 1;
        
        const numSharedWith = Math.floor(Math.random() * 10);
        const status = Math.floor(Math.random() * 3); // 0 = Not touched, 1 = In progress, 2 = Approved
        const title = adjectives[Math.floor(Math.random() * adjectives.length)] + ' ' + nouns[Math.floor(Math.random() * nouns.length)]
        const date = randomDate(new Date(2018, 0, 1), new Date()).toISOString();
        
        const sharedWith = []; 

        for (let j = 0; j < numSharedWith; j++) {
            const gender = Math.floor(Math.random() * 2); // 0 = Female, 1 = Male
            const avatarNumber = Math.floor(Math.random() * 98) + 1;
            let imgLocation = `https://randomuser.me/api/portraits/${gender === 0 ? 'women' : 'men'}/${avatarNumber}.jpg`
            let name = (gender === 0 ? 
                        womensNames[Math.floor(Math.random() * womensNames.length)] :
                        mensNames[Math.floor(Math.random() * mensNames.length)] )
            sharedWith.push({name: name, img: imgLocation})
        }

        let file = {
            filetype: filetype, 
            title: title, 
            time: date, 
            status: status,
            sharedWith: sharedWith
        }
        data.push(file);


    }

    return data;
}
