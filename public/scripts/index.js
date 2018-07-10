$( document ).ready(function(){
    
    const log = console.log;
    
    // const reasons = [];
    // const concerns = [];
    
    const scrolling = {
        scroll: (hash, duration = 800) => {
            log(hash)
            $('html, body').animate({
            scrollTop: $(`${hash}`).offset().top
            }, duration)
        },

        eventATags: () => {
            $('a.jump').click(function(){
                event.preventDefault();
                if(this.hash === '#two-q' && sorting.reasons.length < 1){
                    //log('asdf')
                    $('#alert-1').attr('class','alert display')
                    return;
                } else {
                    scrolling.scroll(this.hash);
                    log(this.hash);
                    const t = this.hash.split('-')
                    const navId = `nav-${t[1]}`
                    log(navId)
                    //log(t)
                    $('.page').attr('class','page')
                    $(`#${navId}`).attr('class','page current-page')
                }
            })
        },
     }

scrolling.eventATags();

const sorting = {
    reasons: [],
    concerns: [],
    sortItems: (e, answerId, question) => {
        const indexT = e.indexOf(answerId) > -1
        const index = e.indexOf(answerId)
        if(question){
            !indexT && e.push(answerId)
        } else {
            indexT && e.splice(index, 1)
        }      
    },
    eventDroppable: () => {
        $('.answer-box, .options').droppable({
            accept: '.selection',
            drop: function(event, ui) {
                const answer = $(ui.draggable).attr('class')
                const answerId = $(ui.draggable).attr('id')
                const target = $(this).context.className
                const section = target.indexOf('one') > -1
                const question = target.indexOf('answer') > -1
                
                section ? 
                    sorting.sortItems(sorting.reasons, answerId, question) : 
                    sorting.sortItems(sorting.concerns, answerId, question)   
                
                $('#alert-1').attr('class','alert')
                log(sorting.reasons)
                log(sorting.concerns)
            }
        })    
    },

}

sorting.eventDroppable();
    // setTimeout(scroll.bind(null, '#interest-q'),3000)



    // const sortItems = (e, answerId, question) => {
    //     const indexT = e.indexOf(answerId) > -1
    //     const index = e.indexOf(answerId)
    //     if(question){
    //         !indexT && e.push(answerId)
    //     } else {
    //         indexT && e.splice(index, 1)
    //     }
            
    // // }

    // $('.answer-box, .options').droppable({
    //     accept: '.selection',
    //     drop: function(event, ui) {
    //         const answer = $(ui.draggable).attr('class')
    //         const answerId = $(ui.draggable).attr('id')
    //         const target = $(this).context.className
    //         const section = target.indexOf('one') > -1
    //         const question = target.indexOf('answer') > -1
    //         log(section)
    //         log(question)


            
    //         section ? 
    //             sorting.sortItems(reasons, answerId, question) : 
    //             sorting.sortItems(concerns, answerId, question)   
            

    //         log(answer)
    //         log(target)
    //         log(reasons)
    //         log(concerns)
    //         $('#alert-1').attr('class','alert')
    //     }
    // })

    $('.answer-box').droppable('option','activeClass','highlight')

    
    $('.selection').draggable({
        snap: true,
        distance: 5,
        revert: 'invalid',
        appendTo: function(event, ui){
            console.log(event)
            console.log(ui)
        },
        containment: 'window'
    })

    // $('.selection').click(function(){
    //     console.log($(this).parent().attr('class'))
    //     const parent = $(this).parent().attr('class')
    //     const question = parent.indexOf('options') > -1
    //     const section = parent.indexOf('one') > -1
    //     log(question)
    //     log(parent)
        
    //     question ?
    //         $(this).appendTo('#intro-answer-box') :
    //         $(this).appendTo('#intro-options')
    // })

    
    // Make qoute visible
    $('div.img-qoute-cont').mouseover(function(){
        $(this).find('div.qoute').attr('class','qoute qoute-visible')
    }).mouseout(function(){
        $(this).find('div.qoute').attr('class','qoute')
    })

})