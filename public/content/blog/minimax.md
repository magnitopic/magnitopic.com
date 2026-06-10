---
title: "Implementing Minimax for Game AI: From Basic Algorithm to Optimized Search"
date: "2025-10-27"
draft: false

description: "The Minimax or Min-Max algorithm is a very powerful tool for AI decision making in two player games. And in this article we'll try and understand how it works as well as how to optimize and best utilize it for your game AIs."
tags: ["ai", "algorithm", "game-ai", "gamedev", "programming"]
---

The Minimax or Min-Max algorithm is a very powerful tool for AI decision making in two player games. It works great for Chess, Tic-Tac-Toe, Checkers, Go, Gomoku… etc. And in this article we'll try and understand how it works as well as how to optimize and best utilize it for your game AIs.

You know when you play chess and think about how the opponent would react if you did this or that move? We are essentially doing the same, so we want to **maximize** how well we do while **minimizing** how well the opponent can respond.

Minimax is a recursive function, consisting of three main parts:

1. Break condition
2. Maximizing player
3. Minimizing player

This is a simple Python code example:

```python
def minimax(gameState, depth, maximizingPlayer):
    if depth == 0 or gameOver(gameState):
        return boardStaticEvaluation(gameState)

    if maximizingPlayer:
        maxEval = -float('inf')
        for child in get_positions(gameState):
            eval = minimax(child, depth - 1, False)
            maxEval = max(maxEval, eval)
        return maxEval
    else:
        minEval = float('inf')
        for child in get_positions(gameState):
            eval = minimax(child, depth - 1, True)
            minEval = min(minEval, eval)
        return minEval
```

While the required depth is not reached or we don't find an ending we continue to iterate through the option tree. If at this depth we want to maximize we pick the largest value we find, if we want to minimize we pick the lowest values.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/u46hf9fugvwv586wib0m.png)

In the image above we can observe the decision tree in action, with the different board values being passed from the bottom to the top and with the alternating min & max decisions in each level.

## Heuristics function

One of the two functions the minimax algorithm calls upon is `boardStaticEvaluation()`, this function gives a number value to the current state of the board for the given player, it should take into account both players' situations and subtract those two values. The result number is the board value.

For some games this can be a straightforward process. For chess or checkers one crude but effective way of doing this is to count up the amount of points you have and the amount of points the opponent has and the subtraction of those two numbers is the board value. Of course for some other games like Go or Gomoku more advanced pattern finding is required to evaluate boards effectively.

## Potential move selection

The second function minimax relies upon is `get_positions()`. We need to know what moves to consider in our algorithm and since we can't evaluate every possible piece and every possible position this function should return a list of all values we will evaluate.

Keep in mind that the number of values you return will be the number of child nodes each node has.

# Issues with Minimax

When using minimax the biggest issue is optimization and time. Since this is a tree algorithm you can increase the amount of time it takes to go through all the positions you want to evaluate and since every node has itself various child nodes it has exponential growth.

Aside from other optimization techniques which we'll see in a moment, the two most significant variables you can change to make your minimax algorithm slower or faster is the **depth** and the **number of child nodes**.

# Optimization techniques

## Alpha-Beta Pruning

This is the most widely used optimization technique as it eliminates branches that don't affect the final decision. It keeps the highest (or lowest) value found so far and discards any branches that are worse.

Here is an example in python of what our code could look like:

```python
def minimax(gameState, depth, alpha, beta, maximizingPlayer):
    if depth == 0 or gameOver(gameState):
        return boardStaticEvaluation(gameState)

    if maximizingPlayer:
        maxEval = -float('inf')
        for child in get_positions(gameState):
            eval = minimax(child, depth - 1, alpha, beta, False)
            maxEval = max(maxEval, eval)
            alpha = max(alpha, eval)
            if beta <= alpha:
                break  # Beta cut-off
        return maxEval
    else:
        minEval = float('inf')
        for child in get_positions(gameState):
            eval = minimax(child, depth - 1, alpha, beta, True)
            minEval = min(minEval, eval)
            beta = min(beta, eval)
            if beta <= alpha:
                break  # Alpha cut-off
        return minEval
```

## Position priority sorting

Since the amount of positions on the board we can evaluate is limited we can create some quick evaluation functions that help us find what positions are more advantageous and so when we return the list in `get_positions()` the values are from most to least promising. This also helps with Alpha-Beta pruning, since more promising positions get evaluated first.

## Principal Variation Search

If using the previous technique we can also optimize by having a dynamic search depth which gives bigger depths to the first positions, since they appear to be more promising, and lower depth to later positions.

# Final thoughts

As we have explored in this article, the minimax algorithm is a very powerful tool when making game AIs for two player games. It does tend to increase execution time exponentially but with some good optimization and heuristics implementations we can turn it into a worthy foe for any human player.
