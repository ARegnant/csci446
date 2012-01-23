class Player
  def initialize
    @health=20
  end
  def play_turn(warrior)
    if warrior.feel.empty?
	if @health > warrior.health
		if warrior.health < 10
			warrior.walk! :backward
		else
			warrior.walk! :forward
		end
	else
		if warrior.health < 15
			warrior.rest!
		else
			warrior.walk! :forward
		end
	end
    elsif warrior.feel.wall?
	warrior.pivot!	
    else
	if warrior.feel.captive?
		warrior.rescue!
	elsif warrior.health > 15 or @health > warrior.health
		warrior.attack!
	else
		warrior.rest!
	end
    end
    @health=warrior.health
  end
end
