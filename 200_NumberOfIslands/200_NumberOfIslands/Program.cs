using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _200_NumberOfIslands
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //Given an m x n 2D binary grid grid which represents a map of '1's (land)
            //and '0's (water), return the number of islands.

            //An island is surrounded by water and is formed by connecting adjacent lands horizontally
            //or vertically. You may assume all four edges of the grid are all surrounded by water.

            //Example 1
            //Input: grid = [
            //["1","1","1","1","0"],
            //["1","1","0","1","0"],
            //["1","1","0","0","0"],
            //["0","0","0","0","0"]
            //]
            //Output: 1

        }

        public class Solution
        {
            public int NumIslands(char[][] grid)
            {
                var count = 0;
                for (int i = 0; i < grid.Length; i++)
                {
                    for (int j = 0; j < grid[i].Length; j++)
                    {
                        if (grid[i][j] == '1')
                        {
                            count++;
                            UpdateGrid(grid, i, j);
                        }
                    }
                }

                return count;
            }

            public void UpdateGrid(char[][] grid, int i, int j)
            {
                if (i < 0 || j < 0 || i == grid.Length || j == grid[0].Length || grid[i][j] == '0')
                {
                    return;
                }
                grid[i][j] = '0';

                UpdateGrid(grid, i - 1, j);
                UpdateGrid(grid, i + 1, j);
                UpdateGrid(grid, i, j - 1);
                UpdateGrid(grid, i, j + 1);
            }

        }
    }
}
