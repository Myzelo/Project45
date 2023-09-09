class Game {
    constructor(){
        
    }

    updateGameState(state){
        firebase.database().ref("gameState").update({
            gameState:state
        })
    }
}