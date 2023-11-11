//http://www.bosontreinamentos.com.br/programacao-em-linguagem-c/como-implementar-uma-pilha-em-linguagem-c-usando-array/

#include <stdio.h>
#include <stdlib.h>

// Definir o tamanho máximo da pilha
#define TAM_MAX 100

// Definir a estrutura da pilha
struct pilha {
    int topo; // índice do topo da pilha
    int items[TAM_MAX]; // array para armazenar os itens da pilha
};

// Função que cria uma pilha vazia
struct pilha* criar_pilha() {
    struct pilha* nova_pilha = (struct pilha*) malloc(sizeof(struct pilha));
    nova_pilha->topo = -1;
    return nova_pilha;
}

// Função para verificar se a pilha está vazia
int is_empty(struct pilha* pilha) {
    return pilha->topo == -1;
}

// Função que verifica se a pilha está cheia
int is_full(struct pilha* pilha) {
    return pilha->topo == TAM_MAX - 1;
}

// Função para adicionar um item ao topo da pilha
void push(struct pilha* pilha, int item) {
    if (is_full(pilha)) {
        printf("Erro: a pilha está cheia.\n");
    }
    else {
        pilha->topo++;
        pilha->items[pilha->topo] = item;
    }
}

// Função para remover o item do topo da pilha
int pop(struct pilha* pilha) {
    if (is_empty(pilha)) {
        printf("Erro: a pilha está vazia.\n");
        return -1;
    }
    else {
        int item_removido = pilha->items[pilha->topo];
        pilha->topo--;
        return item_removido;
    }
}

// Função para retornar o item do topo da pilha sem removê-lo
int peek(struct pilha* pilha) {
    if (is_empty(pilha)) {
        printf("Erro: a pilha está vazia.\n");
        return -1;
    }
    else {
        return pilha->items[pilha->topo];
    }
}

int main()
{
    struct pilha* minha_pilha = criar_pilha();

    // Adicionar alguns itens à pilha
    push(minha_pilha, 10);
    push(minha_pilha, 20);
    push(minha_pilha, 30);
    push(minha_pilha, 40);
    push(minha_pilha, 40);

    // Mostrar o item atual do topo da pilha
    printf("Item atual do topo: %d\n", peek(minha_pilha));

    // Remover e imprimir o item do topo da pilha
    printf("Item removido: %d\n", pop(minha_pilha));

    // Mostrar o novo item atual do topo da pilha
    printf("Item atual do topo: %d\n", peek(minha_pilha));

    return 0;
}
