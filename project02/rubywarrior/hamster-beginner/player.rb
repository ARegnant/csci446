class Player
  @health=warrior.health
  def play_turn(warrior)
    if warrior.feel.empty?
	if warrior.health < 20
		warrior.rest!
	else
		warrior.walk!
	end
    else
	if warrior.health < 10
		warrior.rest!
	else
		warrior.attack!
	end
    end
  end
end
