using System;

class Graph
{
    private int[,] adjMatrix;   // матрица смежности
    private int vertices;
    private Random rand = new Random();

    public Graph(int v)
    {
        vertices = v;
        adjMatrix = new int[vertices, vertices];
        GenerateRandomEdges();
    }

    private void GenerateRandomEdges()
    {
        for (int i = 0; i < vertices; i++)
        {
            for (int j = i + 1; j < vertices; j++)
            {
                int edge = rand.Next(2); // 0 или 1
                adjMatrix[i, j] = edge;
                adjMatrix[j, i] = edge; // для неориентированного графа
            }
        }
    }

    public void PrintGraph()
    {
        Console.WriteLine("Матрица смежности графа:");
        for (int i = 0; i < vertices; i++)
        {
            for (int j = 0; j < vertices; j++)
            {
                Console.Write(adjMatrix[i, j] + " ");
            }
            Console.WriteLine();
        }
    }

    public void DFS(int start)
    {
        Console.WriteLine("\nОбход в глубину от вершины " + start + ":");
        bool[] visited = new bool[vertices];
        DFSRecursive(start, visited);
        Console.WriteLine();
    }

    private void DFSRecursive(int vertex, bool[] visited)
    {
        visited[vertex] = true;
        Console.Write(vertex + " ");

        for (int i = 0; i < vertices; i++)
        {
            if (adjMatrix[vertex, i] == 1 && !visited[i])
            {
                DFSRecursive(i, visited);
            }
        }
    }
}

class Program
{
    static void Main()
    {
        Graph g = new Graph(6);   // граф из 6 вершин
        g.PrintGraph();           // вывод матрицы смежности
        g.DFS(0);                 // обход в глубину от вершины 0
    }
}