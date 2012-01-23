class Player
  def initialize
    @health=20
  end
  def play_turn(warrior)
    if warrior.feel.empty?
	if @health > warrior.health or warrior.health == 20
		warrior.walk!
	else
		warrior.rest!
	end
    else
	if warrior.health > 15 or @health > warrior.health
		warrior.attack!
	else
		warrior.rest!
	end
    end
    @health=warrior.health
  end
end
